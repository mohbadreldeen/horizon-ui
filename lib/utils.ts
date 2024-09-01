/* eslint-disable no-prototype-builtins */
import { type ClassValue, clsx } from 'clsx'
import qs from 'query-string'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date) => {
    const dateTimeOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
        month: 'short', // abbreviated month name (e.g., 'Oct')
        day: 'numeric', // numeric day of the month (e.g., '25')
        hour: 'numeric', // numeric hour (e.g., '8')
        minute: 'numeric', // numeric minute (e.g., '30')
        hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    }

    const dateDayOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
        year: 'numeric', // numeric year (e.g., '2023')
        month: '2-digit', // abbreviated month name (e.g., 'Oct')
        day: '2-digit', // numeric day of the month (e.g., '25')
    }

    const dateOptions: Intl.DateTimeFormatOptions = {
        month: 'short', // abbreviated month name (e.g., 'Oct')
        year: 'numeric', // numeric year (e.g., '2023')
        day: 'numeric', // numeric day of the month (e.g., '25')
    }

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric', // numeric hour (e.g., '8')
        minute: 'numeric', // numeric minute (e.g., '30')
        hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    }

    const formattedDateTime: string = new Date(dateString).toLocaleString('en-US', dateTimeOptions)

    const formattedDateDay: string = new Date(dateString).toLocaleString('en-US', dateDayOptions)

    const formattedDate: string = new Date(dateString).toLocaleString('en-US', dateOptions)

    const formattedTime: string = new Date(dateString).toLocaleString('en-US', timeOptions)

    return {
        dateTime: formattedDateTime,
        dateDay: formattedDateDay,
        dateOnly: formattedDate,
        timeOnly: formattedTime,
    }
}

export function formatAmount(amount: number): string {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    })

    return formatter.format(amount)
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value))

export const removeSpecialCharacters = (value: string) => {
    return value.replace(/[^\w\s]/gi, '')
}

interface UrlQueryParams {
    params: string
    key: string
    value: string
}

export function getTimeAgo(timestamp: number): string {
    const currentTime = Date.now()
    const timeDifference = currentTime - timestamp

    const seconds = Math.floor(timeDifference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    if (years > 0) {
        return `${years} y ago`
    } else if (months > 0) {
        return `${months} mo ago`
    } else if (days > 0) {
        return `${days} d ago`
    } else if (hours > 0) {
        return `${hours} h ago`
    } else if (minutes > 0) {
        return `${minutes} m ago`
    } else {
        return `${seconds} s ago`
    }
    // if (years > 0) {
    //     return `${years} year${years > 1 ? 's' : ''} ago`
    // } else if (months > 0) {
    //     return `${months} month${months > 1 ? 's' : ''} ago`
    // } else if (days > 0) {
    //     return `${days} day${days > 1 ? 's' : ''} ago`
    // } else if (hours > 0) {
    //     return `${hours} hour${hours > 1 ? 's' : ''} ago`
    // } else if (minutes > 0) {
    //     return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    // } else {
    //     return `${seconds} second${seconds > 1 ? 's' : ''} ago`
    // }
}
