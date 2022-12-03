import React from "react";
import { connect } from "react-redux";
import { getPokemons } from '../../redux/actions';
import Card from '../Card';
import Loading from '../Loading';
import style from './Home.module.css';

class Home extends React.Component {
    constructor (props) {
        super (props);
        this.state = { currentPage: 0 }
    }
    componentDidMount () {
        this.props.getPokemons();
    }
    nextPage = () => {
        const total = this.props.pokemons.length;
        const index = this.state.currentPage + 12;
        if (index >= total) return;
        this.setState((state) => {
            return {currentPage: state.currentPage + 12}
        }, () => console.log('next'));
    }
    previousPage = () => {
        const prev = this.state.currentPage - 1;
        if (prev < 0) return;
        this.setState((state) => {
            return {currentPage: state.currentPage - 12}
        }, () => console.log('prev'));
    }

    render () {
        if (this.props.pokemons.length) {
            return (
                <div className="main">
                <h3>Pokemons Main</h3>
                    <div className={style.container}>
                        <button onClick={this.previousPage}>previous</button>
                        <button onClick={this.nextPage}>next</button>
                    </div>
                <div className="container">
                    {
                        this.props.pokemons.slice(this.state.currentPage, this.state.currentPage + 12).map((pokemon, i) => (
                            <Card
                            key = {pokemon.id}
                            id = {pokemon.id}
                            name = {pokemon.name}                            
                            image = {pokemon.front}
                            types = {pokemon.types}
                            />                            
                        ))
                    }
                </div>
            </div>
            )
        }
        else {
            return (
                <Loading />
            )
        }
    }
}
const mapStateToProps = function (state) {
    return {
        pokemons: state.pokemonsFiltered
    }
}
const mapDispatchToProps = function (dispatch) {
    return {
        getPokemons: () => dispatch(getPokemons())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);