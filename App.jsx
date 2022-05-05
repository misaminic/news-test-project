import { useState, useEffect } from 'react';
import './App.css';
import SingleArticle from './components/SingleArticle';

const apiUrl =
  'https://storage.googleapis.com/aller-structure-task/test_data.json';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [title, setTitle] = useState('');
  const [tempElementId, setTempElementId] = useState('');

  const fetchData = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (data) setNewsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (e, rowIndex, articleIndex) => {
    console.log(e);
    console.log(title);
    setTempElementId(`${rowIndex}-${articleIndex}`);
    if (e.target.innerText === 'Save') {
      // set proper error if title is empty
      if (title.length === 0) {
        e.target.innerText = 'Edit';
        return;
      }
      const newsDataTemp = [...newsData];
      newsDataTemp[0][rowIndex].columns[articleIndex].title = title;
      setNewsData(newsDataTemp);
      setTitle('');
      setTempElementId('');
      e.target.innerText = 'Edit';
    } else {
      e.target.innerText = 'Save';
    }
  };

  const changeTitle = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  if (newsData) console.log(newsData);

  return (
    <div className="container">
      {newsData &&
        newsData.map((rootItem) => {
          return rootItem.map((row, rowIndex) => {
            return row.columns.map((article, articleIndex) => {
              const { title, url, imageUrl, width } = article;

              // Props to pass to a SingleArticle component
              const props = {
                tempElementId,
                imageUrl,
                url,
                title,
                width,
                rowIndex,
                articleIndex,
                changeTitle,
                handleEdit,
              };

              return <SingleArticle {...props} />;
            });
          });
        })}
    </div>
  );
}

export default App;
