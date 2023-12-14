'use client';

import { Masonry } from '@mui/lab';
import NewsCard from '~/infrastructure/ui/molecules/Card/NewsCard';
import styles from './News.module.scss';
import { truncateString } from '~/shared/utils/truncateString';
import { useGetAllNews } from '~/infrastructure/api/news/getAllNews';

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
            description={truncateString(newItem.description, 100)}
          />
        ))
      ) : (
        <div></div>
      )}
    </Masonry>
  );
};

export default News;
