'use client';
import classNames from 'classnames';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import PlayerWrapper from '~/infrastructure/ui/atoms/PlayerWrapper';

interface VideoPlayerProps {
  url: string | undefined;
  title: string | undefined;
  className?: string | number | symbol | undefined;
}

const VideoPlayer = ({ url, title, className }: VideoPlayerProps) => {
  return (
    <PlayerWrapper className={classNames({ [className || '']: Boolean(className) })} title={title}>
      {(props: ReactPlayerProps) => (
        <ReactPlayer
          {...props}
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                showinfo: 0,
                modestbranding: 0,
                loop: 1,
                rel: 0,
                disablekb: 1
              }
            }
          }}
          url={url}
          width="100%"
          height="100%"
        />
      )}
    </PlayerWrapper>
  );
};

export default VideoPlayer;
