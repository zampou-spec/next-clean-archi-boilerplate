'use client';
import screenfull from 'screenfull';
import classNames from 'classnames';
import PrettoSlider from '../PrettoSlider';
import { Iconify } from '~/shared/ui/components/Iconify';
import { OnProgressProps } from 'react-player/base';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import { truncateString } from '~/shared/utils/truncateString';
import { Box, Button, IconButton, NoSsr, Typography } from '@mui/material';
import { ReactNode, useEffect, useRef, useState, SyntheticEvent } from 'react';

import styles from './PlayerWrapper.module.scss';

type PlayerWrapperProps = {
  title?: string;
  url: string | undefined;
  children: (props: ReactPlayerProps) => ReactNode;
  className?: string | number | symbol | undefined;
};

const formatPlayerTime = (seconds: number | string): string => {
  if (typeof seconds === 'string' || isNaN(seconds)) {
    return '00:00';
  }

  const date = new Date(seconds * 1000);

  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes().toString().padStart(2, '0');
  const ss = date.getUTCSeconds().toString().padStart(2, '0');

  if (hh) {
    return `${hh}:${mm}:${ss}`;
  }

  return `${mm}:${ss}`;
};

const inverseTimeCalc = (left: number | string, right: number | string): number | string => {
  if (typeof left === 'string' || typeof right === 'string') {
    return '';
  }

  return left - right;
};

const PlayerWrapper = ({ title, url, children, className }: PlayerWrapperProps) => {
  const reactPlayerRef = useRef<ReactPlayer>();
  const controlPanelRef = useRef<HTMLElement>();
  const playerWrapperRef = useRef<HTMLElement>();
  const [full, setFull] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [waitFirstLoad, setWaitFirstLoad] = useState(false);
  const [showControlPanel, setShowControlPanel] = useState(true);
  const [timeFormatDIsplay, setTimeFormatDIsplay] = useState(true);
  const [playerProgress, setPlayerProgress] = useState({
    loaded: 0,
    played: 0,
    playedSeconds: 0,
    loadedSeconds: 0
  });

  useEffect(() => {
    handlePause();
  }, [url]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const controlPanel: HTMLElement | undefined = controlPanelRef?.current;

    const showOverlayOnMouseMove = () => {
      if (playing) {
        setShowControlPanel(true);

        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          setShowControlPanel(false);
        }, 3500);
      }
    };

    const handleMouseEnter = () => {
      showOverlayOnMouseMove();
    };

    const handleMouseLeave = () => {
      if (playing) {
        if (waitFirstLoad) setShowControlPanel(false);

        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    };

    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === ' ' && (event.target as HTMLElement)?.tagName !== 'INPUT') {
        event.preventDefault();
      }
    }

    document.addEventListener('keydown', handleKeyPress);
    controlPanel?.addEventListener('mouseenter', handleMouseEnter);
    controlPanel?.addEventListener('mouseleave', handleMouseLeave);
    controlPanel?.addEventListener('mousemove', showOverlayOnMouseMove);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('keydown', handleKeyPress);
      controlPanel?.removeEventListener('mouseenter', handleMouseEnter);
      controlPanel?.removeEventListener('mouseleave', handleMouseLeave);
      controlPanel?.removeEventListener('mousemove', showOverlayOnMouseMove);
    };
  }, [playing, waitFirstLoad]);

  const handlePlay = () => {
    if (!waitFirstLoad) {
      const timeoutId = setTimeout(() => {
        setWaitFirstLoad(true);
        clearTimeout(timeoutId);
        setShowControlPanel(false);
      }, 3500);
    }
  };

  const handlePause = () => {
    setPlaying(false);
    setWaitFirstLoad(false);
    setShowControlPanel(true);
  };

  const handlePlaying = () => {
    setShowControlPanel(true);
    setPlaying((play) => !play);
  };

  const handleEnded = () => {
    setPlaying(false);
    setShowControlPanel(true);
  };

  const toggleFullScreen = async () => {
    setFull((fulls) => !fulls);
    await screenfull.toggle(playerWrapperRef.current);
  };

  const handleProgress = (changeState: OnProgressProps) => {
    if (!seeking) {
      setPlayerProgress({ ...changeState });
    }
  };

  const handleVolumeChange = (_e: Event | SyntheticEvent, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      const parsedValue = newValue / 100;
      const roundedValue = parseFloat(parsedValue.toFixed(1));

      setVolume(roundedValue);
      setMuted(newValue === 0);
    }
  };

  const handleOnSeekChange = (_e: Event | SyntheticEvent, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      const value = newValue / 100;
      setPlayerProgress({
        ...playerProgress,
        played: parseFloat(value.toString())
      });
    }
  };

  const handleOnSeekMouseUp = (_e: Event | SyntheticEvent, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      const value = newValue / 100;
      setSeeking(false);
      reactPlayerRef.current?.seekTo(parseFloat(value.toString()));
    }
  };

  const duration: number | string = reactPlayerRef.current ? reactPlayerRef.current.getDuration() : '00:00';
  const currentTime: number | string = reactPlayerRef.current ? reactPlayerRef.current.getCurrentTime() : '00:00';

  const totalDuration = formatPlayerTime(duration);
  const handleMute = () => setMuted((mute) => !mute);
  const handleOnSeekMouseDown = () => setSeeking(true);
  const elapsedTime = timeFormatDIsplay
    ? formatPlayerTime(currentTime)
    : `-${formatPlayerTime(inverseTimeCalc(duration, currentTime))}`;
  const handleTimeFormatDIsplay = () => setTimeFormatDIsplay(!timeFormatDIsplay);

  return (
    <Box
      ref={playerWrapperRef}
      className={classNames(styles.playerWrapper, {
        [className || '']: Boolean(className)
      })}
    >
      <Box ref={controlPanelRef} className={classNames(styles.overlay, { [styles.show]: showControlPanel })}>
        <Box className={styles.playerTop}>
          <Typography variant="h6">{truncateString(title || '', 154)}</Typography>
        </Box>
        <Box className={styles.playerCenter}>
          <IconButton onClick={handlePlaying} className={styles.playing}>
            {playing ? (
              <Iconify icon="mdi:pause" fontSize="30px" color="#fff" />
            ) : (
              <Iconify icon="mdi:play" fontSize="30px" color="#fff" />
            )}
          </IconButton>
        </Box>
        <Box className={styles.playerBottom}>
          <Box className={styles.prettoSlider}>
            <PrettoSlider
              min={0}
              max={100}
              sx={{ width: '100%' }}
              valueLabelDisplay="auto"
              onChange={handleOnSeekChange}
              valueLabelFormat={elapsedTime}
              value={playerProgress.played * 100}
              onMouseDown={handleOnSeekMouseDown}
              onChangeCommitted={handleOnSeekMouseUp}
            />
          </Box>
          <Box className={styles.playAction}>
            <Box className={styles.left}>
              <IconButton onClick={handlePlaying} className={styles.iconPlaying}>
                {playing ? (
                  <Iconify icon="mdi:pause" fontSize="30px" color="#fff" />
                ) : (
                  <Iconify icon="mdi:play" fontSize="30px" color="#fff" />
                )}
              </IconButton>
              <Box component="div" className={styles.volume}>
                <IconButton onClick={handleMute}>
                  {muted ? (
                    <Iconify icon="mdi:volume-off" fontSize="20px" color="#fff" />
                  ) : (
                    <Iconify icon="mdi:volume-high" fontSize="20px" color="#fff" />
                  )}
                </IconButton>

                <PrettoSlider
                  min={0}
                  max={100}
                  size="small"
                  sx={{ width: 60 }}
                  value={volume * 100}
                  valueLabelDisplay="auto"
                  onChange={handleVolumeChange}
                  onChangeCommitted={handleVolumeChange}
                />
              </Box>
            </Box>
            <Box className={styles.right}>
              <Button onClick={handleTimeFormatDIsplay} variant="text" sx={{ color: '#fff', marginLeft: 1 }}>
                {elapsedTime}/{totalDuration}
              </Button>
              <IconButton onClick={toggleFullScreen} className={styles.iconVolume}>
                {full ? (
                  <Iconify icon="mdi:fullscreen-exit" fontSize="30px" color="#fff" />
                ) : (
                  <Iconify icon="mdi:fullscreen" fontSize="30px" color="#fff" />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <NoSsr defer={true}>
        {children({
          muted,
          volume,
          playing,
          url: url,
          controls: false,
          onPlay: handlePlay,
          ref: reactPlayerRef,
          onPause: handlePause,
          onEnded: handleEnded,
          onProgress: handleProgress,
          onError: () => handlePause()
        })}
      </NoSsr>
    </Box>
  );
};

export default PlayerWrapper;
