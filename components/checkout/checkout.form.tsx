"use client";
import React, {
  FormEvent,
  FormEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  Checkbox,
  Dialog,
  Container,
} from "@mui/material";
import { IOrder, IOrderError } from "../../interfaces/interface.orders";
import { contextCheckout } from "../context/context.checkout";
import { IGeonames } from "../../interfaces/interface.geonames";
import { undefined } from "zod";
import Link from "next/link";

interface CheckoutFormProps {}

export default function CheckoutForm({}: CheckoutFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<IOrder>({
    for_another_person: false,
    gender: "FEMALE",
    birth_date: "2001-01-09",
  } as IOrder);
  const [errors, setErrors] = useState<IOrderError>({} as IOrderError);
  const [geoNames, setGeonames] = useState<IGeonames>([]);
  const [modalSuccess, setModalSuccess] = useState(false);
  const { analyses, clearAllOrderLines } = useContext(contextCheckout);

  useEffect(() => {
    (async () => {
      try {
        const geoNames_res = await fetch("/api/geonames/");
        setGeonames(await geoNames_res.json());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      lines: analyses.map((analysesItem) => ({
        amount: analysesItem.amount,
        analysis: analysesItem.id,
      })),
    }));
  }, [analyses]);

  function onSubmitForm(event) {
    (async () => {
      try {
        const order_create_res = await fetch("/api/orders/", {
          method: "post",
          body: JSON.stringify(form),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        if (!order_create_res.ok) {
          setErrors(await order_create_res.json());
        } else {
          setModalSuccess(true);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }

  const onInput: FormEventHandler<HTMLInputElement> = (event) => {
    event.stopPropagation();
    const target = event.target as HTMLInputElement;

    setForm((prevState) => ({
      ...prevState,
      [target.name]:
        target.name !== "for_another_person" ? target.value : target.checked,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [target.name]: undefined,
    }));
  };

  async function onCloseSuccess() {
    clearAllOrderLines();
    await router.push("/");
    setModalSuccess(false);
  }

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="checkout__form checkout-form">
      <form onSubmit={onSubmitForm}>
        <Typography variant="h6" gutterBottom>
          Данные пациента
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              onInput={onInput}
              id="last_name"
              name="last_name"
              error={!!errors.last_name}
              label="Фамилия"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="first_name"
              onInput={onInput}
              name="first_name"
              error={!!errors.first_name}
              label="Имя"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="patronymic"
              name="patronymic"
              error={!!errors.patronymic}
              label="Отчество"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="birth_date"
              onInput={onInput}
              name="birth_date"
              error={!!errors.birth_date}
              label="Дата рождения"
              fullWidth
              variant="outlined"
              defaultValue={form.birth_date}
              type="date"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="phone_number"
              onInput={onInput}
              name="phone_number"
              error={!!errors.phone_number}
              label="Телефон"
              fullWidth
              autoComplete="telephone"
              variant="outlined"
              helperText="Мы свяжемся с вами, чтобы уточнить детали"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="email"
              onInput={onInput}
              name="email"
              error={!!errors.email}
              label="Эл. почта"
              fullWidth
              autoComplete="email"
              variant="outlined"
              helperText="Результаты теста придут на эту почту"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControlLabel
              control={<Checkbox onChange={onInput} />}
              name="for_another_person"
              label="Я заказываю для другого человека"
            />
          </Grid>
          {!!form.for_another_person && (
            <>
              <Grid item xs={12} sm={4}>
                <TextField
                  onInput={onInput}
                  id="customer_first_name"
                  name="customer_first_name"
                  error={!!errors.last_name}
                  label="Фамилия"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="customer_last_name"
                  onInput={onInput}
                  name="customer_last_name"
                  error={!!errors.first_name}
                  label="Имя"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="customer_patronymic"
                  name="customer_patronymic"
                  error={!!errors.patronymic}
                  label="Отчество"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </>
          )}
          <Grid item xs={12} sm={6}>
            <FormLabel required id="gender-label">
              Пол
            </FormLabel>
            <RadioGroup
              onInput={onInput}
              row
              defaultValue="FEMALE"
              name="gender"
            >
              <FormControlLabel
                value="FEMALE"
                control={<Radio />}
                label="Женский"
              />
              <FormControlLabel
                value="MALE"
                control={<Radio />}
                label="Мужской"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel required id="demo-radio-buttons-group-label">
              Где вам удобнее сдать материал?
            </FormLabel>
            <RadioGroup
              onInput={onInput}
              row
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="FEMALE"
                control={<Radio />}
                label="В нашем мед. центре"
              />
              <FormControlLabel
                value="MALE"
                control={<Radio />}
                label="На дому"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel required id="select-city">
                Город
              </InputLabel>
              <Select
                labelId="select-city"
                id="geoname"
                name="geoname"
                label="Город"
                fullWidth
                autoComplete="email"
                variant="outlined"
                //@ts-ignore
                onChange={onInput}
                error={!!errors.geoname}
              >
                {geoNames.map((geoName) => (
                  <MenuItem key={geoName.id} value={geoName.id}>
                    {geoName.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              required
              id="address"
              name="address"
              onInput={onInput}
              label="Адрес"
              fullWidth
              autoComplete="address"
              variant="outlined"
              error={!!errors.address}
            />
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
        <Typography variant="h6" gutterBottom>
          Дополнительные данные
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="last_name"
              onInput={onInput}
              name="last_name"
              label="Диагноз"
              error={!!errors.diagnosis}
              fullWidth
              autoComplete="family-name"
              variant="outlined"
              multiline
              rows={6}
              maxRows={6}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="first_name"
              name="first_name"
              onInput={onInput}
              label="Комментарий"
              error={!!errors.comment}
              fullWidth
              autoComplete="given-name"
              variant="outlined"
              multiline
              rows={6}
              maxRows={6}
            />
          </Grid>
        </Grid>
      </form>

      <Dialog
        onBackdropClick={onCloseSuccess}
        onClose={onCloseSuccess}
        open={modalSuccess}
      >
        <Container sx={{ paddingBottom: 10, paddingTop: 10 }}>
          <Typography variant="h6" gutterBottom>
            Заказ успешно оформлен!
          </Typography>
          <button
            onClick={onCloseSuccess}
            type="submit"
            className="analyses-detail__card "
          >
            <span>Понятно</span>
          </button>
        </Container>
      </Dialog>
      <div
        style={{
          marginTop: 10,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 20,
        }}
        className="checkout-card__button"
      >
        <button
          onClick={onSubmitForm}
          type="submit"
          className="analyses-detail__card "
        >
          <span>Оформить заказ</span>
        </button>
        <button onClick={() => router.back()} style={{ color: "#009AFF" }}>
          Назад
        </button>
      </div>
    </div>
  );
}
