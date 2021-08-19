import { Stack, Flex, Heading, HStack, Text, VStack, Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useHistory, useParams } from 'react-router';
import { getRandomRoomId } from '..';
import { useAuth, useSocket, useQuiz } from '..';
import { Input } from '@chakra-ui/input';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AnotherCategory, PlayAgain } from '../Quiz/Buttons';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import { Avatar } from '@chakra-ui/avatar';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import Host from './Host';
import OtherMembers from './OtherMembers';

export {
	Host,
	OtherMembers,
	CreateRoom,
	JoinRoom,
	AnotherCategory,
	PlayAgain,
	useLocation,
	useColorModeValue,
	Stack,
	HStack,
	Avatar,
	CopyToClipboard,
	FaCopy,
	Flex,
	Box,
	Heading,
	Text,
	VStack,
	Button,
	useEffect,
	useState,
	Input,
	useHistory,
	useParams,
	getRandomRoomId,
	useAuth,
	useSocket,
	useQuiz
};
