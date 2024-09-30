import { xf, exists } from '../functions.js';
import mediaInfoFactory from 'mediainfo.js';

class CourseVideo extends HTMLElement {
    constructor() {
        super();

        this.workout = {};
        this.distance = 0;
        this.watchStatus = null;
        this.workoutStatus = null;
    }

    connectedCallback() {
        this.dom = {
            courseVideoElement: document.querySelector('#course-video')
        }

        const abortController = new AbortController();
        const signal = {signal: abortController.signal};

        xf.sub('db:workout', this.onWorkout.bind(this), signal);
        xf.sub(`db:watchStatus`, this.onWatchStatus.bind(this), signal);
        xf.sub(`db:workoutStatus`, this.onWorkoutStatus.bind(this), signal);
        xf.sub(`db:distance`, this.onDistance.bind(this), signal);

        this.renderInit(this.dom);
    }

    disconnectedCallback() {
        document.removeEventListener(`db:workout`, this.onWorkout);
        document.removeEventListener(`db:watchStatus`, this.onWatchStatus);
        document.removeEventListener(`db:workoutStatus`, this.onWorkoutStatus);
        document.removeEventListener(`db:distance`, this.onDistance);
    }

    onDistance(distance) {
        this.distance = distance;
        if(!exists(this.video)) return;
        var videoElapsed = (this.video.currentTime * 100) / this.video.duration;
        var currentDistanceComplete = (distance * 100) / this.workout.meta.distance;
        var relativeSpeed = currentDistanceComplete - videoElapsed;
        // console.log(`Video duration: ${this.video.duration}, Distance: ${distance}, Video elapsed: ${videoElapsed}, CurrentDistanceComplete: ${currentDistanceComplete}, RelativeSpeed: ${relativeSpeed})`);
        this.video.playbackRate = relativeSpeed;
    }

    onWorkout(workout) {
        this.workout = workout;
        console.log(`Workout: ${JSON.stringify(workout)}`);
        this.render();
    }

    onWatchStatus(status) {
        this.watchSatus = status;
        if(status === 'started') { this.renderStarted(this.dom); }
        if(status === 'paused')  { this.renderPaused(this.dom);  }
        if(status === 'stopped') { this.renderStopped(this.dom); }
    }

    onWorkoutStatus(status) {
        this.workoutStatus = status;
        if(status === 'started') { this.renderWorkoutStarted(this.dom); }
        if(status === 'done')    {  }
    }

    renderWorkoutStarted() {
        console.log(`Workout started`);
    }

    renderStarted() {
        console.log(`Watch started`);
        if(!exists(this.video)) return;
        this.video.play();
    }

    renderPaused() {
        console.log(`Watch paused`);
        if(!exists(this.video)) return;

        this.video.pause();
    }

    renderStopped(){
        console.log(`Watch stopped`);
        if(!exists(this.video)) return;
        this.video.stop();
    }

    async getVideoMetadata(filePath) {
        const mediainfo = await mediaInfoFactory();
        const result = mediainfo.analyzeFile(filePath);
        mediainfo.close();

        return result;
    }

    renderInit(dom) {
        this.video = this.dom.courseVideoElement.querySelector('video');
        dom.courseVideoElement.style.display = 'none';
    };

    render() {
        if(exists(this.workout)) {
            var file = `${this.workout.meta.name.replace(/ /g,"_")}.mp4`;
            this.video = this.dom.courseVideoElement.querySelector('video');
            this.video.src = new URL(file, 'http://localhost:1235/');
            this.video.preload = 'metadata';
            this.workout.meta.duration = this.video.duration;
            this.video.load();
            this.video.defaultPlaybackRate = 0;
            this.dom.courseVideoElement.style.display = 'inline-block';
        }
    }
}

customElements.define("course-video", CourseVideo);

export { CourseVideo };