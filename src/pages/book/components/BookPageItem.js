import React from "react";
import { Info, Item, Section } from "../styles/BookPageItem.style";
import Title from "../../../components/Title";

const BookPageItem = ({ book }) => {
  return (
    <Section>
      <Item>
        <img src={book.cover ? book.cover : "https://place-hold.it/300x500"} />
      </Item>
      <Item>
        <Info>
          <Title title={"Наименование: "} />
          {book.name}
        </Info>
        <Info>
          <Title title={"Автор: "} />
          {book.author.name}
        </Info>
        <Info>
          <Title title={"Издательство: "} />
          {book.publisher.name}
        </Info>
        <Info>
          <Title title={"Категории: "} />
          {book.categories.length
            ? book.categories.map((i) => {
                return <div key={i.id}>{i.name}</div>;
              })
            : "Отсутсвуют"}
        </Info>
        <Info>
          <Title title={"Описание: "} />
          {book.discription}
        </Info>
        <Info>
          <Title title={"Стоимость: "} />
          {book.price}&#8381;
        </Info>
      </Item>
    </Section>
  );
};

export default BookPageItem;
