import { winOption } from "./app";

export class playerModel {

    loadAudio(audio) {
        return audio.src = winOption.getWinOption().audio;
    }

    play(audio) {
        console.log('play');
        return audio.play();
    }

    pause(audio) {
        console.log('pause');
        return audio.pause();
    }

    progress(audio) {
        return `${audio.currentTime * 100 / audio.duration}%`;
    }
}