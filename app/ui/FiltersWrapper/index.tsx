'use client';

import { ReactNode, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import { Blur, FiltersContent, Wrapper } from './wrappers';

interface Props {
  children: ReactNode;
}

export default function FiltersWrapper(props: Props) {
  const { children } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper open={open}>
      <FiltersContent className="filters-content" open={open}>
        {open ? (
          <div className="content">
            <div className="flex">
              <h2>Filtres actuels</h2>
              <button onClick={handleClose}>
                <TfiClose size={12} />
              </button>
            </div>
            {children}
          </div>
        ) : (
          <div className="open-button_wrapper" onClick={handleOpen}>
            <div className="open-button">
              <p>Filtres</p>
              <SlArrowDown size={11} />
            </div>
          </div>
        )}
      </FiltersContent>
      <Blur open={open} />
    </Wrapper>
  );
}
