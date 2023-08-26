const page = ({ params }: { params: { id: number | string } }) => {
  console.log(params);

  return <div>Page Params: {params.id}</div>;
};

export default page;
