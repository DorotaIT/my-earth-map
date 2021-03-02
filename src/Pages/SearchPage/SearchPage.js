import React from 'react';
import './SearchPage.scss';
import { SearchingBoard } from '../../components/SearchingBoard/SearchingBoard';
import { DisplayNasaImage } from '../../components/DisplayNasaImage/DisplayNasaImage'
import { DisplaySelectedLocationOnMap } from '../../components/DisplaySelectedLocationOnMap/DisplaySelectedLocationOnMap';

export const SearchPage = () => {

  return (
    <div className="container">
      <p>SearchPage</p>
      <SearchingBoard/>
      <DisplayNasaImage/>
      <DisplaySelectedLocationOnMap/>
    </div>
  )
}