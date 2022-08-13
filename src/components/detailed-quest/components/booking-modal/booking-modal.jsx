import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { sendOrder } from 'store/api-actions';
import { getOrderPostStatus } from 'store/reducers/orders/orders-selectors';
import { useEffect } from 'react';
import { clearPostOrderStatus } from 'store/action-creators/actions';
import { toast } from 'react-toastify';
import { INITIAL_NUMBER_OF_PEOPLE, PHONE_NUMBER_PATTERN, PHONE_NUMBER_PATTERN_TITLE } from 'const/const';

const BookingModal = ({ onClosePopupClick }) => {

  const [order, setOrder] = useState({
    name: '',
    phone: '',
    peopleCount: INITIAL_NUMBER_OF_PEOPLE,
    isLegal: false
  });

  const {name, phone, peopleCount, isLegal} = order;

  const dispatch = useDispatch();

  const isPostSuccessfull = useSelector(getOrderPostStatus);

  useEffect(() => {
    if (isPostSuccessfull) {
      setOrder({
        name: '',
        phone: '',
        peopleCount: INITIAL_NUMBER_OF_PEOPLE,
        isLegal: false
      });
      dispatch(clearPostOrderStatus());
      toast.info('Ваш заказ отправлен');
    }
  }, [isPostSuccessfull])

  const handleUsernameChange = (evt) => {
    setOrder({
      name: evt.target.value,
      phone,
      peopleCount,
      isLegal,
    });
  };

  const handlePhoneChange = (evt) => {
    setOrder({
      name,
      phone: evt.target.value,
      peopleCount,
      isLegal,
    });
  };

  const handlePeopleCountChange = (evt) => {
    setOrder({
      name,
      phone,
      peopleCount: parseInt(evt.target.value, 10),
      isLegal,
    });
    console.log(order);
  };

  const handleLegalChange = (evt) => {
    setOrder({
      name,
      phone,
      peopleCount,
      isLegal: evt.target.checked,
    });
    console.log(order);
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendOrder(order));
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onClosePopupClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="#"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              onChange={handleUsernameChange}
              value={name}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              onChange={handlePhoneChange}
              value={phone}
              pattern={PHONE_NUMBER_PATTERN}
              title={PHONE_NUMBER_PATTERN_TITLE}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              onChange={handlePeopleCountChange}
              value={peopleCount}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              onChange={handleLegalChange}
              checked={isLegal}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

BookingModal.propTypes = {
  closePopupHandler: PropTypes.func,
}

export default BookingModal;
