import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const postSchema = yup.object().shape({
  title: yup.string().required('This Field is required'),
  body: yup.string().required().min(30, 'too short').max(200, 'too long'),
  phoneNumber: yup.string().matches('^\\+964\\d{10}$', 'wrong'),
});

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20')
      .then((response) => {
        console.log(response);
        if (response && response.status === 200) {
          setPosts(response.data);
          setLoading(false);
          setError(false);
        } else {
          setError('Error Found');
        }
      })
      .catch((err) => {
        setError('page not found 404');
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    fetchData();
  };

  return (
    <main style={{ backgroundColor: 'white' }}>
      <h1>Home</h1>
      <div>users</div>
      {error ? (
        <>{error}</>
      ) : (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <div>
                <h1>Add Post</h1>
                <Formik
                  validationSchema={postSchema}
                  initialValues={{ title: '', body: '', phoneNumber: '' }}
                  onSubmit={(values) => {
                    axios
                      .post('https://jsonplaceholder.typicode.com/posts', {
                        ...values,
                      })
                      .then((response) => {
                        fetchData();
                      });
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Field type='text' name='title' />
                      <ErrorMessage name='title' />

                      <Field type='text' name='body' />
                      <ErrorMessage name='body' component='div' />

                      <Field type='text' name='phoneNumber' />
                      <ErrorMessage name='body' component='div' />

                      <button type='submit'>Submit</button>
                    </Form>
                  )}
                </Formik>
              </div>
              {posts &&
                posts.map((post, i) => (
                  <div key={post.id}>
                    <p>{post.title}</p>
                    <button onClick={() => deletePost(post.id)}>delete</button>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
