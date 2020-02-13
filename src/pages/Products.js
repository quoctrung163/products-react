import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

export default function Products() {
  const productsArr = [
    {
      id: "d0aff36a-3a1c-407a-94d4-4a20932e1f9f",
      name: "Wine - Gewurztraminer Pierre",
      description:
        "in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
    },
    {
      id: "55936d86-59b8-4d8e-867e-5c72e17b983e",
      name: "Skirt - 29 Foot",
      description:
        "at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
      imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
    },
    {
      id: "d8075718-f79f-45c0-b8c6-2192a3c7a3a4",
      name: "Rye Special Old",
      description:
        "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
      imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
    },
    {
      id: "9920c560-b614-4777-92eb-0c14bb5096eb",
      name: "Juice - Clamato, 341 Ml",
      description:
        "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
      imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
    },
    {
      id: "3d24d0ae-d18f-41c0-ab77-e79c2a5ebf9f",
      name: "Pants Custom Dry Clean",
      description:
        "erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate",
      imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
    },
    {
      id: "50b2e86c-93a1-4d55-9923-da7e648e64a4",
      name: "Beef - Ox Tongue",
      description:
        "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac",
      imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
    },
    {
      id: "de49d3d9-ac30-4eec-8a08-d35e2f39e658",
      name: "Sugar - Icing",
      description:
        "amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
      imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
    },
    {
      id: "e9013673-bc13-4f7e-90c0-74d9e65a099c",
      name: "Jam - Raspberry,jar",
      description:
        "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie",
      imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
    },
    {
      id: "b8150b75-59e9-4fb2-8cd6-a40615efdeef",
      name: "Lotus Rootlets - Canned",
      description:
        "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat",
      imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
    },
    {
      id: "c0cf0fa6-0b7f-4f55-8876-2ce4474cafe9",
      name: "Cakes Assorted",
      description:
        "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh",
      imageUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
    },
    {
      id: "af676c01-368a-44bc-ba0f-2f7d230a228c",
      name: "Soy Protein",
      description:
        "a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
      imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
    },
    {
      id: "ac297051-bdcd-45c4-9ada-7221b5dc0cf3",
      name: "Wine - White, Schroder And Schyl",
      description:
        "amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
      imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
    },
    {
      id: "f9f06b9d-5aca-4ba3-bf17-17d97a108f1a",
      name: "Beans - Soya Bean",
      description:
        "dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
      imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
    },
    {
      id: "3ce4bb1d-dddf-457b-a75f-a114a44a337e",
      name: "Soup - Tomato Mush. Florentine",
      description:
        "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
      imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
    },
    {
      id: "39e45f44-bc07-4b28-9ca0-63b07ae35dbf",
      name: "Chocolate - Liqueur Cups With Foil",
      description:
        "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
      imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
    },
    {
      id: "0ecc4a46-5757-4a3c-873a-753f8f4096f9",
      name: "Nantucket - Orange Mango Cktl",
      description:
        "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
      imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
    },
    {
      id: "d46beeb7-b0a2-4c18-ac0a-e8168cbc4557",
      name: "Cheese - Marble",
      description:
        "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum",
      imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
    },
    {
      id: "e3863e64-8962-4f96-8d04-4e9ec3007e8f",
      name: "Pepper - Black, Ground",
      description:
        "nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce",
      imageUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
    },
    {
      id: "7fb50cd0-d19b-47f5-9c03-e2b667d5ab5d",
      name: "Kumquat",
      description:
        "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
      imageUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
    },
    {
      id: "c52b83c8-e0c0-4502-9302-5709fb537182",
      name: "Tart Shells - Sweet, 3",
      description:
        "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",
      imageUrl: "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
    }
  ];

  const [products, setProducts] = useState(productsArr);
  return (
    <Container>
      <h2>Products</h2>
      <Row>
        {products.map(product => (
          <Col xs="12" sm="6" md="4" lg="3">
            <Card>
              <CardImg
                top
                width="100%"
                src={product.imageUrl}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>{product.name}</CardSubtitle>
                <CardText>{product.description}</CardText>
                <Button>Add to Cart</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
