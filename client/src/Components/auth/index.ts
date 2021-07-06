import { Button } from '@chakra-ui/button';
import { Box, Flex, Text, VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Username, Password, ReEnterPassword } from './input';
import { useAuth, signUp, signIn } from '..';
import { useHistory } from 'react-router';
import Logout from './Logout';

export {
	Box,
	Flex,
	Text,
	VStack,
	Button,
	useState,
	useColorModeValue,
	Username,
	Password,
	ReEnterPassword,
	signUp,
	signIn,
	useAuth,
	useHistory,
	Logout
};
