import React from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";
import "./main.css";
import Slide from "./Slide";
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      top_issued: [],
      search_field: "",
      search_array: [],
    };
    this.logout = this.logout.bind(this);
    this.update = this.update.bind(this);
    // this.getSearch = this.getSearch.bind(this);
    this.issue = this.issue.bind(this);
    this.getTopIssued = this.getTopIssued.bind(this);
  }
  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    this.props.history.push("/");
  }
  issue(id) {
    fetch(`http://localhost:8000/issue/${id}`).then((error, res) => {
      this.getArticles();
    });
  }
  getArticles() {
    fetch("http://localhost:8000")
      .then((response) => response.json())
      .then((response) =>
        response.map((article) => ({
          id: `${article._id}`,
          name: `${article.name}`,
          author: `${article.author}`,
          pub_year: `${article.pub_year}`,
          copies: `${article.copies}`,
        }))
      )
      .then((articles) => {
        this.setState({
          books: articles,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  getTopIssued() {
    fetch("http://localhost:8000/topissued")
      .then((response) => response.json())
      .then((res) =>
        res.data.map((article) => ({
          id: `${article._id}`,
          name: `${article.name}`,
          author: `${article.author}`,
          pub_year: `${article.pub_year}`,
          times_issued: `${article.times_issued}`,
          copies: `${article.copies}`,
        }))
      )
      .then((articles) => {
        this.setState({
          top_issued: articles,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  // getSearch(e){
  //   e.preventDefault();
  // //   this.setState({search_array:this.state.books.filter((book) => {
  // //     const BookName = book.name.toLowerCase();
  // //     return (BookName.includes(this.state.search_field.toLowerCase()))
  // // })})
  // }
  componentDidMount() {
    this.getArticles();
    this.getTopIssued();
  }
  update(e) {
    this.setState({ search_field: e.target.value });
    const filtered = this.state.books.filter((book) => {
      return book.name
        .toLowerCase()
        .includes(this.state.search_field.toLowerCase());
    });
    this.setState({ search_array: filtered });
  }
  render() {
    return (
      <div>
        <h1 className="center" style={{marginTop:"20px", marginBottom:"20px",textAlign:"center"}}>Welcome to E-library</h1>
       <div style={{textAlign:"center"}}>
       <input
          type="text"
          id="header-search"
          placeholder="Search Book"
          name="header-search"
          onChange={(e) => this.update(e)}
          style={{ height: "30px", margin: "0px", border: "2px solid black" }}
        />
        <span
          style={{
            marginLeft: "20px",
            fontSize: "30px",
            fontWeight: "bold",
            color: "brown",
            padding: "20px",
          }}
        >
          Search Book By Name
        </span>
       </div>

        <div style={{marginTop:"20px",marginBottom:"40px"}} class="flex">
          {this.state.search_field === ""
            ? this.state.books.map((books) => {
                const { id, name, author, pub_year, copies } = books;
                return (
                  <div  style={{margin:"15px"}} key={id} class="card">
                    <p class="name">{name}</p>
                    <p class="author">By- {author}</p>
                    <p class="year">{pub_year}</p>
                    <div class="des">
                      <div class="copy" onClick={() => this.issue(id)}>
                        Issue
                      </div>
                      <div class="copies">No. of copies - {copies}</div>
                    </div>
                  </div>
                );
              })
            : this.state.search_array.map((books) => {
                const { id, name, author, pub_year, copies } = books;
                return (
                  <div key={id} class="card">
                    <p class="name">{name}</p>
                    <p class="author">By- {author}</p>
                    <p class="year">{pub_year}</p>
                    <div class="des">
                      <div class="copy" onClick={() => this.issue(id)}>
                        Issue
                      </div>
                      <div class="copies">No. of copies - {copies}</div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
export default withRouter(Application);
