import { Text, Box, Flex, ListItem, UnorderedList, VStack, Grid } from '@chakra-ui/layout';
import { useQuiz, useSocket } from '..';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { AnotherCategory, PlayAgain, PlayAlone, PlayWithFriends, SkipQuestionButton } from './Buttons';
import { useHistory, useLocation } from 'react-router';
import CurrentScore from '../Quiz/CurrentScore';
import Questions from '../Quiz/Questions';
import QuizOptions from './QuizOptions';
import QuizTimer from './QuizTimer';
import { rules } from '..';
import PlayOptions from './PlayOptions';

export {
	Button,
	Text,
	Box,
	Flex,
	ListItem,
	UnorderedList,
	Grid,
	VStack,
	rules,
	PlayOptions,
	useQuiz,
	useColorModeValue,
	useParams,
	useEffect,
	useState,
	useHistory,
	useLocation,
	axios,
	AnotherCategory,
	PlayAgain,
	PlayAlone,
	PlayWithFriends,
	SkipQuestionButton,
	useSocket,
	CurrentScore,
	Questions,
	QuizOptions,
	QuizTimer
};
