import styles from './details.module.css';
import type { Params } from 'react-router-dom';
import { getDetails } from '../../utils/fetcher';
import { useLoaderData, useNavigate, useOutletContext } from 'react-router';
import { useEffect } from 'react';

interface IFContext {
  closeClicked: () => void;
  isOpen: () => void;
}

export const Details = () => {
  const context = useOutletContext() as IFContext;
  const obj = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    context.isOpen();
  }, []);

  const handleClickClose = () => {
    context.closeClicked();
    navigate(-1);
  };
  return (
    <>
      <div className={styles.details}>
        <img src={obj.image} alt="image" />
        <p>{obj.origin.name}</p>
        <p>{obj.location.name}</p>
      </div>
      <button onClick={handleClickClose}>Close details</button>
    </>
  );
};

export const detailsLoader = async ({ params }: { params: Params<'id'> }) => {
  const { id } = params;
  const res = await getDetails(id as string);
  if (!res) {
    throw Error('Could not found job details');
  }
  return res;
};
