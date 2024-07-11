// src/App.js


import { Container, Row, Col, Card } from 'react-bootstrap';

const movies = [
  {
    title: 'Inception',
    image: 'https://via.placeholder.com/150',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
    footer: 'Released: 2010 | Rating: PG-13',
  },
  {
    title: 'The Dark Knight',
    image: 'https://via.placeholder.com/150',
    description: 'When the menace known as the Joker emerges from his mysterious past.',
    footer: 'Released: 2008 | Rating: PG-13',
  },
  {
    title: 'Interstellar',
    image: 'https://via.placeholder.com/150',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    footer: 'Released: 2014 | Rating: PG-13',
  },
  {
    title: 'The Matrix',
    image: 'https://via.placeholder.com/150',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.',
    footer: 'Released: 1999 | Rating: R',
  },
  {
    title: 'Fight Club',
    image: 'https://via.placeholder.com/150',
    description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club.',
    footer: 'Released: 1999 | Rating: R',
  },
  {
    title: 'Forrest Gump',
    image: 'https://via.placeholder.com/150',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and more.',
    footer: 'Released: 1994 | Rating: PG-13',
  },
  {
    title: 'The Godfather',
    image: 'https://via.placeholder.com/150',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    footer: 'Released: 1972 | Rating: R',
  },
  {
    title: 'The Shawshank Redemption',
    image: 'https://via.placeholder.com/150',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    footer: 'Released: 1994 | Rating: R',
  },
  {
    title: 'Pulp Fiction',
    image: 'https://via.placeholder.com/150',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    footer: 'Released: 1994 | Rating: R',
  },
];

const App = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Movie Cards</h1>
      <Row>
        {movies.map((movie, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card>
              <Card.Header>{movie.title}</Card.Header>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Text>{movie.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{movie.footer}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
