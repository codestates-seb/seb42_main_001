import React from "react";
import styled from "styled-components";
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'

import { Radar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, RadarController, RadialLinearScale);

function DrinksDetailChart({ drinksDetail }: DrinksDetailProps) {
  // {fruity:1, orc:4, smoky:1, spicy:2, sweet:1}
  const tastingValues: any = Object.values(drinksDetail?.tastingNote ?? {})

  const data: ChartData<'radar', number[]> = {
    labels: ['sweet', 'smoky', 'orc', 'spicy', 'fruity'],
    datasets: [
      {
        label: 'Tasting Note',
        data: tastingValues,
        backgroundColor: 'white',
      },
    ],
  };

  const options: ChartOptions<'radar'> & ChartOptions = {
    elements: {
      //데이터 속성.
      line: {
        borderWidth: 3,
        borderColor: '#db9927c0',
      },
      //데이터 꼭짓점.
      point: {
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: '#823308',
      },
    },
    scales: {
      r: {
        ticks: {
          stepSize: 1,
          display: false,
        },
        grid: {
          color: '#8F8F8F',

        },
        //라벨 속성 지정.
        pointLabels: {
          font: {
            size: 14,
            weight: '700',
            family: 'SUIT',
          },
          color: '#473F3F',
        },
        backgroundColor: '#ffffff',
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
    plugins: {
      legend: {
        display: false,
      },
    },
    //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
    animation: {
      duration: 1,
    },
  };

  return (
    <ChartContainer>
      <Radar data={data} options={options} />
    </ChartContainer>
  );
}

export default DrinksDetailChart;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--medium);

  div {
    width: 100%;
    height: 500px;
    background-color: var(--color-main);
  }
`;
