"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"

import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import HeaderComponent from "@/components/Header";
import HeroComponent from "@/components/HeroComponent";
import CallToActionComponent from "@/components/CallToAction";
import HowWorksComponent from "@/components/HowWorks";
import BenefitsComponent from "@/components/Benefits";
import FooterSection from "@/components/Footer";
import SavingComponent from "@/components/Saving";

import { useState, useEffect } from "react";

import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


export default function Savings() {

  const { showConfetti, setShowConfetti } = useContext(GlobalContext);
  const { width, height } = useWindowSize()
  
  setShowConfetti(false);

  return (
    <>
      <div className="px-10 py-20">
        <div className="absolute -z-50 top-0 mx-auto w-1/2 h-1/2 bg-primary/50 blur-[256px] opacity-75 rounded-full -z-1" />
        <div className="absolute -z-50 top-0 left-0 w-1/2 h-1/2 bg-green-300/70 blur-[256px] opacity-45 rounded-full -z-1" />
        <div className="space-y-20">
          <div className="flex flex-col items-center w-full space-y-4">

            <HeaderComponent />

            <main className="flex flex-col items-center">
              { showConfetti && (
                <Confetti
                  width={width}
                  height={height}
                />         
              )}
              <SavingComponent />

            </main>

          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
