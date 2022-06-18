import { FC } from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import styles from './CharactersSlideshow.module.css';

interface Props {
    image: string[]
}

export const CharactersSlideshow: FC<Props> = ({ image }) => {
  return (
    <Slide
        easing="ease"
        duration={ 7000 }
        indicators
    >
        {
            image.map( image =>  {
                const url = `/character/${ image }`;
                return (
                    <div className={ styles['each-slide'] } key={ image }>
                        <div style={{
                            backgroundImage: `url(${ url })`,
                            backgroundSize: 'cover'
                        }}>
                        </div>
                    </div>
                )

            })
        }

    </Slide>
  )
}
