import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { addBookToDb } from "../../api/books";
import {
  getAuthorsFromDb,
  getCategoriesFromDb,
  getPublishersFromDB,
} from "../../api/filters";
import Header from "../../components/Header";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  margin: 50px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin: 20px;
`;

//NEED REVIEW

const CreateNewBook = (props) => {
  const userId = useSelector((state) => state.user.user.id);
  //Errors
  const [nameDirty, setNameDirty] = useState(false);
  const [discriptionDirty, setdiscriptionDirty] = useState(false);
  const [priceDirty, setPriceDirty] = useState(false);
  const [nameError, setNameError] = useState("Поле имени не может быть пустым");
  const [discriptionError, setDiscriptionError] = useState(
    "Поле описания не может быть пустым"
  );
  const [priceError, setPriceError] = useState("Цена не может быть пустой");
  const [form, setForm] = useState(false);
  //-------------------------------------------------------------------

  //params
  const [name, setName] = useState("");
  const [authorId, setAuthorId] = useState(1);
  const [publisherId, setPublisherId] = useState(1);
  const [discription, setDiscription] = useState("");
  const [cover, setCover] = useState("");
  const [price, setPrice] = useState(0);
  const [categoriesId, setCategoriesId] = useState({});
  //-----------------------------------------------------------------------

  //list
  const [authorsList, setAuthorsList] = useState([]);
  const [publishersList, setPublishersList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  //----------------------------------------------------------------------

  //получение информации из БД
  const getCategoriesAPI = async () => {
    const categories = await getCategoriesFromDb();
    setCategoriesList(categories);
  };

  const getPublishersAPI = async () => {
    const publishers = await getPublishersFromDB();
    setPublishersList(publishers);
  };

  const getAuthorsAPI = async () => {
    const authors = await getAuthorsFromDb();
    setAuthorsList(authors);
  };
  //-------------------------------------

  //Блок useEffect
  useEffect(() => {
    getAuthorsAPI();
    getPublishersAPI();
    getCategoriesAPI();
  }, []);

  useEffect(() => {
    if (nameError || discriptionError || priceError) {
      setForm(false);
    } else {
      setForm(true);
    }
  }, [nameError, discriptionError, priceError]);
  //----------------------------------------------

  //change handlers
  const authorHandler = (event, values) => {
    setAuthorId(values.id);
  };

  const publisherHandler = (event, values) => {
    setPublisherId(values.id);
  };

  const categoryHandler = (event) => {
    setCategoriesId({
      ...categoriesId,
      [event.target.name]: event.target.checked,
    });
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
    if (!event.target.value) {
      setPriceError("Цена не может быть пустой");
    } else if (event.target.value < 0) {
      setPriceError("Цена не может быть отрицательной");
    } else {
      setPriceError("");
    }
  };

  const nameHandler = (event) => {
    setName(event.target.value);
    if (!event.target.value) {
      setNameError("Имя не может быть пустым");
    } else {
      setNameError("");
    }
  };

  const discriptionHandler = (event) => {
    setDiscription(event.target.value);
    if (!event.target.value) {
      setDiscriptionError("описание не может быть пустым");
    } else {
      setDiscriptionError("");
    }
  };

  const coverHandler = (event) => {
    setCover(event.target.files[0]);
  };
  //------------------------------------------------

  //blur handler
  const blurHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "discription":
        setdiscriptionDirty(true);
        break;
      case "price":
        setPriceDirty(true);
        break;
    }
  };
  //-------------------------------------------------

  const submitHandler = async (event) => {
    event.preventDefault();
    const form = new FormData();
    //await?
    await form.append("name", name);
    await form.append("authorId", authorId);
    await form.append("publisherId", publisherId);
    await form.append("discription", discription);
    await form.append("cover", cover);
    await form.append("price", price);
    console.log(form.get("cover"));

    let categoryArr = [];
    for (let key in categoriesId) {
      if (categoriesId[key]) categoryArr.push(parseInt(key));
    }

    await form.append("categories", categoryArr);

    addBookToDb(userId, form)
      .then(() => {
        alert("book add to DB");
        props.history.push(`/user/${userId}`);
      })
      .catch((err) => {
        alert(err.data.message);
      });
  };

  return (
    <Container>
      <h1>Создание книги</h1>
      <Main>
        <Form onSubmit={submitHandler}>
          <InputContainer>
            <TextField
              fullWidth
              error={nameDirty && Boolean(nameError)}
              onBlur={blurHandler}
              name='name'
              onChange={nameHandler}
              label={nameDirty ? nameError : "Название книги"}
              variant='outlined'
            />
          </InputContainer>
          <InputContainer>
            <TextField
              error={discriptionDirty && Boolean(discriptionError)}
              onBlur={blurHandler}
              name='discription'
              fullWidth
              onChange={discriptionHandler}
              label={discriptionDirty ? discriptionError : "Описание книги"}
              variant='outlined'
            />
          </InputContainer>

          <InputContainer>
            <input onChange={coverHandler} type='file' name='cover' />
          </InputContainer>

          <InputContainer>
            <FormControl variant='outlined' fullWidth>
              <InputLabel>{priceDirty ? priceError : "Цена"}</InputLabel>
              <OutlinedInput
                error={priceDirty && Boolean(priceError)}
                onBlur={blurHandler}
                name='price'
                type='number'
                onChange={priceHandler}
                startAdornment={
                  <InputAdornment position='start'>&#x20bd;</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </InputContainer>

          <InputContainer>
            <Autocomplete
              options={authorsList}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Авторы'
                  variant='outlined'
                  onChange={authorHandler}
                />
              )}
            />
          </InputContainer>

          <InputContainer>
            <Autocomplete
              options={publishersList}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              onChange={publisherHandler}
              renderInput={(params) => (
                <TextField {...params} label='Издатели' variant='outlined' />
              )}
            />
          </InputContainer>

          <FormControl>
            <FormLabel>Категории</FormLabel>
            <FormGroup>
              {categoriesList.map((item) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        key={item.id}
                        checked={categoriesId.name}
                        onChange={categoryHandler}
                        name={item.id.toString()}
                        value={item.id}
                      />
                    }
                    label={item.name}
                  />
                );
              })}
            </FormGroup>
          </FormControl>
          <Button
            disabled={!form}
            type='submit'
            variant='contained'
            color='primary'
          >
            Создать книгу
          </Button>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateNewBook;
