import React from 'react'

export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration}=props.animeInfo
  return (
    <>
        <div className="anime-content">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
                <h3>#Ранг: {rank}</h3>
                <h3>#Счет: {score}</h3>
                <h3>#Популярность: {popularity}</h3><hr/><br />
                <h4>Члены:{members}</h4>
                <h4>Источник:{source}</h4>
                <h4>Продолжительность:{duration}</h4>
                <h4>Статус:{status}</h4>
                <h4>Рейтинг:{rating}</h4>
            </div>
        </div>
    </>
  )
}
