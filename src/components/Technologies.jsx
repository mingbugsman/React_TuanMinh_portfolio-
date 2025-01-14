import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import {SiMysql} from 'react-icons/si'
import {DiRedis} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"
import {RiRemixiconLine} from "react-icons/ri"
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    inital : {y : -10},
    animate : {
        y : [10,-10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse"
        }
    }
})

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
            whileInView={{opacity : 1, y : 0}}
            initial = {{opacity : 0, y : -100}}
            transition={{duration : 1.5 }}
            className='my-20 text-center text-4xl'>
            Các công nghệ
        </motion.h1>
        <motion.div
            whileInView={{opacity : 1, x : 0}}
            initial = {{opacity : 0, x : -100}}
            transition={{duration : 1.5 }} 
            className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
                variants={iconVariants(2.5)}
                initial = "inital"
                animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
                variants={iconVariants(3)}
                initial = "inital"
                animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl text-white'/>
            </motion.div>
            
            <motion.div 
                 variants={iconVariants(6)}
                 initial = "inital"
                 animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-400'/>
            </motion.div>

            <motion.div 
                 variants={iconVariants(2)}
                 initial = "inital"
                 animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-sky-600'/>
            </motion.div>

            <motion.div 
                 variants={iconVariants(4)}
                 initial = "inital"
                 animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className='text-7xl text-red-700'/>
            </motion.div>

            <motion.div 
                 variants={iconVariants(3)}
                 initial = "inital"
                 animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-400'/>
            </motion.div>

            <motion.div 
                 variants={iconVariants(5.5)}
                 initial = "inital"
                 animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4 bg-white'>
                <RiRemixiconLine className='text-7xl text-black'/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies