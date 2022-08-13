import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './contacts.styled';
import { useEffect, useRef } from 'react';
import useMap from 'hooks/useMap';
import { Icon, Marker } from 'leaflet';
import { EMAIL, EMAIL_LINK, MAP_LOCATION, PHONE_NUMBER, PHONE_NUMBER_LINK, URL_MARKER_DEFAULT } from 'const/const';


const Contacts = () => {
  const location = MAP_LOCATION;

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [28, 40],
    iconAnchor: [14, 40],
  });

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: location.latitude,
        lng: location.longitude,
      });

      marker
        .setIcon(defaultCustomIcon)
        .addTo(map);
    }
  }, [map])

  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>
          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>Адрес</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                  Санкт-Петербург,
                  <br />
                  Набережная реки Карповка, д 5
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>Режим работы</S.ContactTitle>
              <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

              <S.ContactTitle>Телефон</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={PHONE_NUMBER_LINK}>
                  {PHONE_NUMBER}
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>E-mail</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={EMAIL_LINK}>
                  {EMAIL}
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap>
              <S.ContactsMapInteractive ref={mapRef}>
              </S.ContactsMapInteractive>
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
};

export default Contacts;
