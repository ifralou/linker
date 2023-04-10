import {useEffect, useState} from "react";

export default async function fetchIPInfo() {
    const apiUrl = "https://ipapi.co/json/";

    return fetch(apiUrl)
        .then(res => res.json())
}