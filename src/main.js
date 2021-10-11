import React from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';
import './main.css';
import Slide from './Slide'
class Application extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            top_issued:[],
            search_field:'',
            search_array:[]
        };
        this.logout = this.logout.bind(this);
        this.update = this.update.bind(this);
        // this.getSearch = this.getSearch.bind(this);
        this.issue=this.issue.bind(this);
        this.getTopIssued=this.getTopIssued.bind(this)
}
logout(){
  localStorage.removeItem('email');
  localStorage.removeItem('role');
  this.props.history.push('/');
}
issue(id){
  fetch(`http://localhost:8000/issue/${id}`).then((error,res)=>{
    this.getArticles();
  })
}
getArticles() {
    fetch('http://localhost:8000')
    .then(response => response.json()) 
    .then(response =>
      response.map(article => ({
        id:`${article._id}`,
        name: `${article.name}`,
        author: `${article.author}`,
        pub_year: `${article.pub_year}`,
        copies:`${article.copies}`
      }))
    )
    .then(articles => {
      this.setState({
        books:articles
      });
    })
    .catch(error =>{ alert(error)});
}
getTopIssued(){
  fetch('http://localhost:8000/topissued').then(response => response.json())
  .then(res =>
    res.data.map(article => ({
      id:`${article._id}`,
      name: `${article.name}`,
      author: `${article.author}`,
      pub_year: `${article.pub_year}`,
      times_issued: `${article.times_issued}`,
      copies: `${article.copies}`,
    }))
  )
  .then(articles => {
    this.setState({
      top_issued:articles
    });
  })
  .catch(error =>{ alert(error)});
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
update(e){
     this.setState({search_field:e.target.value})
     const filtered = this.state.books.filter(book => {
      return book.name.toLowerCase().includes(this.state.search_field.toLowerCase());
    })
    this.setState({search_array:filtered})
}
render(){
  const em=localStorage.getItem('email')
    return(
    <div>
       <div className="top"> <div style={{ position:"absolute",display: 'flex', width: '100vw', backgroundColor: '#0b0b0b', fontSize: '2vh', fontWeight: 'bold',color:'white',height:'10vh' }}>
        <div style={{ display: 'flex' }}><div style={{ marginTop: '1.5vw', marginBottom: '1.5vw', marginLeft: '10vw', cursor: 'pointer' }}>{em}</div></div>
        <div style={{ display: 'flex', marginLeft: 'auto' }}> 
          <div style={{ marginTop: '1.5vw', marginBottom: '1.5vw', marginRight: '10vw', cursor: 'pointer' }} onClick={(e) => this.logout(e)}>Log Out</div></div>
      </div>
        )
      </div>
        <h1>User Panel</h1>
        <input
            type="text"
            id="header-search"
            placeholder="Search Book"
            name="header-search" 
            onChange={(e)=>this.update(e)}
            style={{height:'30px',margin:'0px',border:'2px solid black'}}
        />
        <span style={{marginLeft:'20px',fontSize:'30px',fontWeight:'bold',color:'brown',padding:'20px'}}>Search Book By Name</span>

        <div class="flex">
          {this.state.search_field===''? this.state.books.map(books => {
               const { id,name, author, pub_year,copies } = books;
              return (
                <div key={id} class="card">
                  <p class="name">{name}</p>
                  <p class="author">By- {author}</p>
                  <p class="year">{pub_year}</p>
                  <div class="des"><div class="copy" onClick={()=>this.issue(id)}>Issue</div><div class="copies">No. of copies - {copies}</div></div>
                </div>
              );
            }): this.state.search_array.map(books => {
              const { id,name, author, pub_year,copies } = books;
             return (
               <div key={id} class="card">
                 <p class="name">{name}</p>
                 <p class="author">By- {author}</p>
                 <p class="year">{pub_year}</p>
                 <div class="des"><div class="copy" onClick={()=>this.issue(id)}>Issue</div><div class="copies">No. of copies - {copies}</div></div>
               </div>
             );
           })}
        </div>
       <h1> Top Issued</h1>
    <Slide array={this.state.top_issued}/>
    </div>);
}
}
export default  withRouter (Application);