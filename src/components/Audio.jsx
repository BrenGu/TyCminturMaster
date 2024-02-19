import React from "react";
import useAudioPlayer from '../components/subcomponentes/useAudioPlayer';
import moment from "moment";
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

function Audio(props) {
  const {url, nombre} = props;
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const curPercentage = (curTime / duration) * 100;
  
  function onTimeUpdate(time) {
    setClickedTime(time)
  }

  function formatDuration(duration) {
    return moment.duration(duration, "seconds").format("mm:ss", { trim: false });
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className="player">
    <audio id="audio">
      <source src={`${url}`} />
      Your browser does not support the <code>audio</code> element.
    </audio>
    <div className="song">
      <h1 className="song__title">Audio</h1>
    </div>
    <div className="controls">
      {playing ? 
        <button className="player__button" onClick={() => setPlaying(false)}>
          <i class="fas fa-pause-circle"></i>
        </button> :
        <button className="player__button" onClick={() => setPlaying(true)}>
          <i class="fas fa-play-circle"></i>
        </button>
      }
       <div className="bar">
        <span className="bar__time">{formatDuration(curTime)}</span>
        <div
          className="bar__progress"
          style={{
            background: `linear-gradient(to right, rgb(28, 228, 45) ${curPercentage}%, white 0)`
          }}
          onMouseDown={e => handleTimeDrag(e)}
        >
          <span
            className="bar__progress__knob"
            style={{ left: `${curPercentage - 2}%` }}
          />
        </div>
        <span className="bar__time">{formatDuration(duration)}</span>
      </div>
    </div>
  </div>
  );
}

export default Audio;
