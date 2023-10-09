'use client';
import { Masonry } from '@mui/lab';
import NewsCard from '~/infrastructure/ui/molecules/Card/NewsCard';
import { useGetAllNews } from '~/infrastructure/api/news/getAllNews';

import styles from './News.module.scss';

const News = () => {
  const { data: news } = useGetAllNews();

  return (
    <Masonry
      spacing={2}
      className={styles.news}
      columns={{ xs: 1, sm: 2, md: 3 }}
      sx={{ alignContent: 'center', margin: 'unset', maxWidth: '1440px !important' }}
    >
      {news && news?.length > 0 ? (
        news?.map((newItem, i) => (
          <NewsCard
            key={i}
            title={newItem.title}
            image={newItem.image}
            author={newItem.author}
            category={newItem.category as string[]}
            href={`/news/${newItem.id}`}
            description={newItem.description}
          />
        ))
      ) : (
        <div></div>
      )}
    </Masonry>
  );
};

export default News;
