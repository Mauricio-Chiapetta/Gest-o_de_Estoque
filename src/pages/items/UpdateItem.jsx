import { useParams } from "react-router-dom";
import { useStock } from "../../hooks/useStock";
import ItemForm from "../../components/ItemForm";

export function UpdateItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  const item = getItem(id);
  return (
    <>
      <h2>Atualizar item - {item.name}</h2>
      <ItemForm itemToUpdate={item} />
    </>
  );
}
