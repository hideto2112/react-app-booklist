import React, { useState, useEffect } from 'react';

const Booklist = props => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));
  }, [props])

  return (
    <div>
      <table>
        <tbody>
          {
            bookData === null
              ? <tr><td>now loading...</td></tr>
              : bookData.data.items.map((x, index) =>
                <tr key={index}>
                  <td>
                    {
                      x.volumeInfo.imageLinks?.smallThumbnail
                        ? <img src={x.volumeInfo.imageLinks?.smallThumbnail} alt="Book's thumbnail" />
                        : <p>No image</p>
                    }
                  </td>
                  <td>
                    <p>{x.volumeInfo.title}</p>
                    <ul>
                      {
                        x.volumeInfo.authors?.map((y, index) =>
                          <li key={index}>{y}</li>
                        )
                      }
                    </ul>
                    <p>{x.volumeInfo.publishedDate}</p>
                    <p><a href={x.volumeInfo.previewLink}>Preview</a></p>
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Booklist;
