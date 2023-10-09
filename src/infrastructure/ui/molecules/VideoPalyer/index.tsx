'use client';
import classNames from 'classnames';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import PlayerWrapper from '~/infrastructure/ui/atoms/PlayerWrapper';

interface VideoPlayerProps {
  url: string | undefined;
  title: string | undefined;
  className?: string | number | symbol | undefined;
}

const VideoPlayer = ({ url, title, className }: VideoPlayerProps) => (
  <PlayerWrapper url={url} title={title} className={classNames({ [className || '']: Boolean(className) })}>
    {(props: ReactPlayerProps) => (
      <ReactPlayer
        {...props}
        config={{
          youtube: {
            playerVars: {
              rel: 0,
              loop: 1,
              autohide: 1,
              showinfo: 0,
              controls: 0,
              disablekb: 1,
              wmode: 'opaque',
              modestbranding: 1,
              fs: 0
            }
          }
        }}
        width="100%"
        height="100%"
        fallback={<div>...loading</div>}
      />
    )}
  </PlayerWrapper>
);

export default VideoPlayer;
