type Category = {
  id?: number;
  name: string;
};

interface ProductFromDB {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: string;
}
interface Product extends ProductFromDB {
  category: string;
}

interface ProducTForDb extends ProductFromDB {
  category_id: number;
}
type Name = {
  name: string;
};
export { Category, Name, ProducTForDb, Product };
