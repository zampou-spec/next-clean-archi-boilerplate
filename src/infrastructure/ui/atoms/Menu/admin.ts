type menuType = {
  link: string;
  title: string;
};

const adminMenus: menuType[] = [
  {
    link: '/dashboard/admin',
    title: 'Dashboard Admin'
  },
  {
    link: '/dashboard/admin/courses',
    title: 'Courses'
  },
  {
    link: '/dashboard/admin/products',
    title: 'Produits'
  },
  {
    link: '/dashboard/admin/news',
    title: 'Actualités'
  }
];

export default adminMenus;
