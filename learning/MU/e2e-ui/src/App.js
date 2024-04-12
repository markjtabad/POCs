import React, { Component } from "react";
import SideNav from "@awesomecomponents/mux/core/components/SideNav";
import UtilityHeader from "@awesomecomponents/mux/core/components/UtilityHeader";
import Button from "@awesomecomponents/mux/core/components/Button";
import H1 from "@awesomecomponents/mux/core/typography/H1";
import H3 from "@awesomecomponents/mux/core/typography/H3";
import P from "@awesomecomponents/mux/core/typography/P";
import Label from "@awesomecomponents/mux/core/components/Label";
import TextInput from "@awesomecomponents/mux/core/components/TextInput";
import Dropdown from "@awesomecomponents/mux/core/components/Dropdown";
import "./App.css";

const API_URL = "https://mu-e2e-ph-01-abadmar-rest.apps.cac.preview.pcf.manulife.com";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      players: [],
      newPlayerName: "",
      newGamePlayer1Id: "",
      newGamePlayer2Id: "",
    };
    this.getGames();
    this.getPlayers();
  }

  async getGames() {
    let response = await fetch(
      `${API_URL}/games`
    );
    let json = await response.json();
    this.setState({ games: json });
  }

  async getPlayers() {
    let response = await fetch(
      `${API_URL}/players`
    );
    let json = await response.json();
    this.setState({ players: json });
  }

  async postPlayer() {
    let body = { name: this.state.newPlayerName };

    await fetch(
      `${API_URL}/players`,
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );

    let temp = this.state.players;
    temp.filter((p) => p.id != null);
    this.setState({ player: temp });

    this.setState({ newPlayerName: "" });
    await this.getPlayers();
  }

  async postGame() {
    let body = {
      player1id: this.state.newGamePlayer1Id,
      player2id: this.state.newGamePlayer2Id,
    };

    await fetch(
      `${API_URL}/games`,
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(body);

    let temp = this.state.games;
    temp.filter((p) => p.id != null);
    this.setState({ games: temp });

    this.setState({ newGamePlayer1Id: "" });
    this.setState({ newGamePlayer2Id: "" });
    await this.getGames();
  }

  newPlayerClick() {
    let temp = this.state.players;
    temp.push({ id: null, name: null });
    this.setState({ players: temp });
  }

  newPlayerOnChange(e) {
    this.setState({ newPlayerName: e });
  }

  newGamePlayer1IdChange(e) {
    this.setState({ newGamePlayer1Id: e });
  }

  newGamePlayer2IdChange(e) {
    let self = this;
    this.setState({ newGamePlayer2Id: e });
    setTimeout(function () {
      self.postGame();
    }, 2000);
  }

  newGameClick() {
    let temp = this.state.games;
    temp.push({ id: null, player1Name: null, player2Name: null, score: null });
    this.setState({ games: temp });
  }

  async updateScore(gameid, playerid) {
    console.log("HERE");
    let body = { playerid };

    console.log(body);

    await fetch(
      `${API_URL}/games/${gameid}`,
      {
        method: "put",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );

    await this.getGames();
  }

  render() {
    return (
      <div>
        <div>
          <UtilityHeader showLangToggle={false} showSignin={false} />
        </div>
        <div>
          <SideNav />
        </div>
        <div
          className="content"
          style={{
            width: "80%",
            height: "80%",
            "maxHeight": "80%",
            "overflowY": "auto",
            margin: "auto",
          }}
        >
          <H1 stlye={{ align: "center" }}>Tennis Tracker</H1>

          <H3>Players</H3>
          <table className="table">
            <tr>
              <th>
                <Label>ID</Label>
              </th>
              <th>
                <Label>Name</Label>
              </th>
            </tr>
            {this.state.players.map((p) => {
              if (p.id != null) {
                return (
                  <tr>
                    <td>
                      <P>{p.id}</P>
                    </td>
                    <td>
                      <P>{p.name}</P>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <td>
                      <P></P>
                    </td>
                    <td>
                      <TextInput
                        value={this.state.newPlayerName}
                        onChange={this.newPlayerOnChange.bind(this)}
                        onBlur={
                          this.postPlayer.bind(this)
                        }
                      />
                    </td>
                  </tr>
                );
              }
            })}
          </table>

          <Button onClick={this.newPlayerClick.bind(this)} variant="tertiary">
            New Player
          </Button>

          <H3>Games</H3>
          <table className="table">
            <tr>
              <th>
                <Label>ID</Label>
              </th>
              <th>
                <Label>Player 1</Label>
              </th>
              <th>
                <Label>Player 2</Label>
              </th>
              <th>
                <Label>Score</Label>
              </th>
            </tr>
            {this.state.games.map((g) => {
              if (g.id != null) {
                return (
                  <tr>
                    <td>
                      <P>{g.id}</P>
                    </td>
                    <td>
                      <P>
                        <button
                          onClick={() => this.updateScore(g.id, g.player1Id)}
                          type="button"
                        >
                          &#43;
                        </button>{" "}
                        {g.player1Name}
                      </P>
                    </td>
                    <td>
                      <P>
                        <button
                          onClick={() => this.updateScore(g.id, g.player2Id)}
                          type="button"
                        >
                          &#43;
                        </button>{" "}
                        {g.player2Name}
                      </P>
                    </td>
                    <td>
                      <P>{g.score}</P>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <td></td>
                    <td>
                      <Dropdown
                        value={this.state.newGamePlayer1Id}
                        onChange={this.newGamePlayer1IdChange.bind(this)}
                        dropdownItems={this.state.players.map((p) => {
                          return { label: p.name, value: p.id };
                        })}
                      />
                    </td>
                    <td>
                      <Dropdown
                        value={this.state.newGamePlayer2Id}
                        onChange={this.newGamePlayer2IdChange.bind(this)}
                        dropdownItems={this.state.players.map((p) => {
                          return { label: p.name, value: p.id };
                        })}
                      />
                    </td>
                    <td></td>
                  </tr>
                );
              }
            })}
          </table>

          <Button onClick={this.newGameClick.bind(this)} variant="tertiary">
            New Game
          </Button>

          {/*<div className="modal">
              HELLO WORLD
             </div>*/}
        </div>
      </div>
    );
  }
}

export default App;
