import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SingleArticle from './components/SingleArticle';
import './App.css';

const apiUrl =
  'https://storage.googleapis.com/aller-structure-task/test_data.json';

function App() {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [title, setTitle] = useState('');
  const [tempElementId, setTempElementId] = useState('');

  const fetchData = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (data) {
      setNewsData(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const save = 'Save';
  const edit = 'Edit';

  const handleEdit = (e, rowIndex, articleIndex) => {
    setTempElementId(`${rowIndex}-${articleIndex}`);
    if (e.target.innerText === save) {
      if (title.length === 0) {
        alert('Please set title');
        return;
      }
      const newsDataTemp = [...newsData];
      newsDataTemp[0][rowIndex].columns[articleIndex].title = title;
      setNewsData(newsDataTemp);
      setTitle('');
      setTempElementId('');
      e.target.innerText = edit;
    } else {
      e.target.innerText = save;
    }
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Container maxWidth="lg" justifyContent="center" alignItems="center">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {newsData && loading === false ? (
          newsData.map((rootItem) => {
            return rootItem.map((row, rowIndex) => {
              return row.columns.map((article, articleIndex) => {
                const { title, url, imageUrl, width } = article;

                // Props to pass to a SingleArticle component
                const articleProps = {
                  tempElementId,
                  imageUrl,
                  url,
                  title,
                  width,
                  rowIndex,
                  articleIndex,
                  changeTitle,
                  handleEdit,
                  save,
                  edit,
                };

                return <SingleArticle {...articleProps} />;
              });
            });
          })
        ) : (
          <div className="loading">
            <h3>Loading...</h3>
          </div>
        )}
      </Grid>
    </Container>
  );
}

export default App;
