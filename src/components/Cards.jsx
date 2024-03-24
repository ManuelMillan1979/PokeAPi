import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cards = ({ pokemonData }) => {
  return (
    <main className='cards'>
      <Row xs={1} md={2} lg={4} className='g-4'>
        {pokemonData.map((pokemon) => (
          <Col key={pokemon.name}>
            <Card className='shadow-lg m-3' style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              />
              <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>
                  Attack: {pokemon.stats[0].base_stat}
                  <br />
                  Defense: {pokemon.stats[1].base_stat}
                  <br />
                  Special Attack: {pokemon.stats[2].base_stat}
                  <br />
                  Special Defense: {pokemon.stats[3].base_stat}
                  <br />
                  Speed: {pokemon.stats[5].base_stat}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link className='m-4 back-link' to='/pokemons'>
        <MdArrowBackIos className='back-arrow-icon' />
      </Link>
    </main>
  );
};

export default Cards;
