'use client';
import { Masonry } from '@mui/lab';
import NewsCard from '~/infrastructure/ui/molecules/Card/NewsCard';

import styles from './News.module.scss';
import { useGetAllNews } from '~/infrastructure/api/news/getAllNews';

const News = () => {
  const { data: news } = useGetAllNews();

  return (
    <Masonry
      spacing={2}
      className={styles.news}
      columns={{ xs: 1, sm: 2, md: 3 }}
      sx={{ alignContent: 'center', margin: 'unset' }}
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
