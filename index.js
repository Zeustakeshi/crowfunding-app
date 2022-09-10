[33mcommit bf0ea924f4d7fe6ff09bbc1d589265ca109f07c2[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: Zeustakeshi <gacon2312@gmail.com>
Date:   Fri Sep 9 20:07:51 2022 +0700

    optimization v1

[1mdiff --git a/src/modules/Camplaign/Camplaign.js b/src/modules/Campaign/Campaign.js[m
[1msimilarity index 63%[m
[1mrename from src/modules/Camplaign/Camplaign.js[m
[1mrename to src/modules/Campaign/Campaign.js[m
[1mindex e6450b3..0544537 100644[m
[1m--- a/src/modules/Camplaign/Camplaign.js[m
[1m+++ b/src/modules/Campaign/Campaign.js[m
[36m@@ -1,25 +1,25 @@[m
 import React from "react";[m
 import PropTypes from "prop-types";[m
 import Heading from "../../components/Heading/Heading";[m
[31m-import CamplaignItem from "./CamplaignItem";[m
[32m+[m[32mimport CampaignItem from "./CampaignItem";[m
 import classNames from "../../utils/classNames";[m
 [m
[31m-const Camplaign = ({ heading, className }) => {[m
[32m+[m[32mconst Campaign = ({ heading, className }) => {[m
     return ([m
         <div className={classNames(className)}>[m
             <Heading>{heading}</Heading>[m
             <div className={classNames("grid grid-cols-4 gap-8")}>[m
[31m-                {new Array(4).fill(0).map((camplaign, index) => ([m
[31m-                    <CamplaignItem key={index}></CamplaignItem>[m
[32m+[m[32m                {new Array(4).fill(0).map((Campaign, index) => ([m
[32m+[m[32m                    <CampaignItem key={index}></CampaignItem>[m
                 ))}[m
             </div>[m
         </div>[m
     );[m
 };[m
 [m
[31m-Camplaign.propTypes = {[m
[32m+[m[32mCampaign.propTypes = {[m
     heading: PropTypes.string,[m
     className: PropTypes.string,[m
 };[m
 [m
[31m-export default Camplaign;[m
[32m+[m[32mexport default Campaign;[m
[1mdiff --git a/src/modules/Campaign/CampaignDesc.js b/src/modules/Campaign/CampaignDesc.js[m
[1mnew file mode 100644[m
[1mindex 0000000..f5feb74[m
[1m--- /dev/null[m
[1m+++ b/src/modules/Campaign/CampaignDesc.js[m
[36m@@ -0,0 +1,23 @@[m
[32m+[m[32mimport React from "react";[m
[32m+[m[32mimport PropTypes from "prop-types";[m
[32m+[m[32mimport classNames from "../../utils/classNames";[m
[32m+[m
[32m+[m[32mconst CampaignDesc = ({ children, className }) => {[m
[32m+[m[32m    return ([m
[32m+[m[32m        <p[m
[32m+[m[32m            className={classNames("content-overflow-limitline", className)}[m
[32m+[m[32m            style={{[m
[32m+[m[32m                "--line": 3,[m
[32m+[m[32m            }}[m
[32m+[m[32m        >[m
[32m+[m[32m            {children}[m
[32m+[m[32m        </p>[m
[32m+[m[32m    );[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mCampaignDesc.propTypes = {[m
[32m+[m[32m    children: PropTypes.node.isRequired,[m
[32m+[m[32m    className: PropTypes.string,[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default CampaignDesc;[m
[1mdiff --git a/src/modules/Camplaign/CamplaignItem.js b/src/modules/Campaign/CampaignItem.js[m
[1msimilarity index 67%[m
[1mrename from src/modules/Camplaign/CamplaignItem.js[m
[1mrename to src/modules/Campaign/CampaignItem.js[m
[1mindex c0f525f..4477ffc 100644[m
[1m--- a/src/modules/Camplaign/CamplaignItem.js[m
[1m+++ b/src/modules/Campaign/CampaignItem.js[m
[36m@@ -3,8 +3,11 @@[m [mimport React from "react";[m
 import Image from "../../components/Image";[m
 import classNames from "../../utils/classNames";[m
 import { IconFolder } from "../../components/Icon";[m
[32m+[m[32mimport CampaignTitle from "./CampaignTitle";[m
[32m+[m[32mimport CampaignDesc from "./CampaignDesc";[m
[32m+[m[32mimport CampaignMeta from "./CampaignMeta";[m
 [m
[31m-const camplaign = {[m
[32m+[m[32mconst Campaign = {[m
     imageUrl:[m
         "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",[m
     tag: "Education",[m
[36m@@ -16,11 +19,11 @@[m [mconst camplaign = {[m
         avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",[m
     },[m
     raisedOf: 1900,[m
[31m-    raised: 2000,[m
[32m+[m[32m    raised: "$2000",[m
     totalBacker: 173,[m
 };[m
 [m
[31m-const CamplaignItem = ({}) => {[m
[32m+[m[32mconst CampaignItem = ({}) => {[m
     const {[m
         imageUrl,[m
         tag,[m
[36m@@ -30,7 +33,7 @@[m [mconst CamplaignItem = ({}) => {[m
         raised,[m
         raisedOf,[m
         totalBacker,[m
[31m-    } = camplaign;[m
[32m+[m[32m    } = Campaign;[m
     return ([m
         <div[m
             className={classNames([m
[36m@@ -44,7 +47,7 @@[m [mconst CamplaignItem = ({}) => {[m
             <div[m
                 className={classNames("w-full h-[158px]", "rounded-[inherit]")}[m
             >[m
[31m-                <Image src={imageUrl} alt="camplaign image" />[m
[32m+[m[32m                <Image src={imageUrl} alt="Campaign image" />[m
             </div>[m
             <div className={classNames("p-5")}>[m
                 <div[m
[36m@@ -60,45 +63,33 @@[m [mconst CamplaignItem = ({}) => {[m
                     <span>{tag}</span>[m
                 </div>[m
                 <div className={classNames("mb-4")}>[m
[31m-                    <h3[m
[32m+[m[32m                    <CampaignTitle[m
                         className={classNames([m
[31m-                            "text-text1 dark:text-white font-semibold text-base",[m
[31m-                            "mb-1",[m
[31m-                            "content-overflow-one-line "[m
[32m+[m[32m                            "font-semibold text-base",[m
[32m+[m[32m                            "mb-1"[m
                         )}[m
                     >[m
                         {title}[m
[31m-                    </h3>[m
[31m-                    <p[m
[31m-                        className="content-overflow-limitline"[m
[31m-                        style={{[m
[31m-                            "--line": 3,[m
[31m-                        }}[m
[31m-                    >[m
[31m-                        {description}[m
[31m-                    </p>[m
[32m+[m[32m                    </CampaignTitle>[m
[32m+[m[32m                    <CampaignDesc>{description}</CampaignDesc>[m
                 </div>[m
                 <div className={classNames("flex-j-between", "mb-5")}>[m
[31m-                    <span className={classNames("flexc gap-y-1")}>[m
[31m-                        <span className="text-text2 dark:text-text4 font-semibold text-sm">[m
[31m-                            ${raised}[m
[31m-                        </span>[m
[31m-                        <span className="text-text4 dark:text-text3 text-xs font-normal">[m
[31m-                            Raised of ${raisedOf}[m
[31m-                        </span>[m
[31m-                    </span>[m
[31m-                    <span className={classNames("flexc gap-y-1")}>[m
[31m-                        <span className="text-text2 dark:text-text4 font-semibold text-sm">[m
[31m-                            {totalBacker}[m
[31m-                        </span>[m
[31m-                        <span className="text-text4 dark:text-text3 text-xs font-normal">[m
[31m-                            Total backers[m
[31m-                        </span>[m
[31m-                    </span>[m
[32m+[m[32m                    <CampaignMeta[m
[32m+[m[32m                        amount={raised}[m
[32m+[m[32m                        desc={` Raised of ${raisedOf}`}[m
[32m+[m[32m                        className="font-semibold text-sm"[m
[32m+[m[32m                        descClassName="text-xs font-normal"[m
[32m+[m[32m                    />[m
[32m+[m[32m                    <CampaignMeta[m
[32m+[m[32m                        amount={totalBacker}[m
[32m+[m[32m                        desc={`Total backer`}[m
[32m+[m[32m                        className="font-semibold text-sm"[m
[32m+[m[32m                        descClassName="text-xs font-normal"[m
[32m+[m[32m                    />[m
                 </div>[m
                 <div className={classNames("flex-j-start gap-3")}>[m
                     <span className="w-[30px] h-[30px] rounded-full inline-block">[m
[31m-                        <Image src={auth.avatar} />[m
[32m+[m[32m                        <Image src={auth.avatar} to="/campaign" />[m
                     </span>[m
                     <span className="flex-j-start gap-1">[m
                         <span>by</span>[m
[36m@@ -112,7 +103,7 @@[m [mconst CamplaignItem = ({}) => {[m
     );[m
 };[m
 [m
[31m-// CamplaignItem.propTypes = {[m
[32m+[m[32m// CampaignItem.propTypes = {[m
 //     imageUrl: PropTypes.string,[m
 //     tag: PropTypes.string,[m
 //     title: PropTypes.string,[m
[36m@@ -126,4 +117,4 @@[m [mconst CamplaignItem = ({}) => {[m
 //     totalBacker: PropTypes.number,[m
 // };[m
 [m
[31m-export default CamplaignItem;[m
[32m+[m[32mexport default CampaignItem;[m
[1mdiff --git a/src/modules/Camplaign/CamplaignItemLarge.js b/src/modules/Campaign/CampaignItemLarge.js[m
[1msimilarity index 58%[m
[1mrename from src/modules/Camplaign/CamplaignItemLarge.js[m
[1mrename to src/modules/Campaign/CampaignItemLarge.js[m
[1mindex 1491e44..c538f37 100644[m
[1m--- a/src/modules/Camplaign/CamplaignItemLarge.js[m
[1m+++ b/src/modules/Campaign/CampaignItemLarge.js[m
[36m@@ -4,8 +4,11 @@[m [mimport Image from "../../components/Image";[m
 import classNames from "../../utils/classNames";[m
 import { IconFolder, IconPlay } from "../../components/Icon";[m
 import Progress from "../../components/Progress/Progress";[m
[32m+[m[32mimport CampaignTitle from "./CampaignTitle";[m
[32m+[m[32mimport CampaignDesc from "./CampaignDesc";[m
[32m+[m[32mimport CampaignMeta from "./CampaignMeta";[m
 [m
[31m-const CamplaignItemLarge = ({ camplaign }) => {[m
[32m+[m[32mconst CampaignItemLarge = ({ Campaign }) => {[m
     return ([m
         <div[m
             className={classNames([m
[36m@@ -22,7 +25,7 @@[m [mconst CamplaignItemLarge = ({ camplaign }) => {[m
                     "mb-5 md:mb-0"[m
                 )}[m
             >[m
[31m-                <Image src={camplaign.videoUrl} className="select-none" />[m
[32m+[m[32m                <Image src={Campaign.videoUrl} className="select-none" />[m
                 <div className={classNames("play-btn")}>[m
                     <IconPlay />[m
                 </div>[m
[36m@@ -40,37 +43,26 @@[m [mconst CamplaignItemLarge = ({ camplaign }) => {[m
                     <span>[m
                         <IconFolder className="w-[20px] h-[16px]" />[m
                     </span>[m
[31m-                    <span>{camplaign.tag}</span>[m
[32m+[m[32m                    <span>{Campaign.tag}</span>[m
                 </div>[m
                 <div className={classNames("mb-4")}>[m
[31m-                    <h1[m
[31m-                        className={classNames([m
[31m-                            "text-text1 dark:text-white font-bold md:text-xl",[m
[31m-                            "mb-4",[m
[31m-                            "content-overflow-one-line "[m
[31m-                        )}[m
[32m+[m[32m                    <CampaignTitle[m
[32m+[m[32m                        className={classNames("font-bold md:text-xl", "mb-4")}[m
                     >[m
[31m-                        {camplaign.title}[m
[31m-                    </h1>[m
[31m-                    <p[m
[31m-                        className="content-overflow-limitline"[m
[31m-                        style={{[m
[31m-                            "--line": 3,[m
[31m-                        }}[m
[31m-                    >[m
[31m-                        {camplaign.description}[m
[31m-                    </p>[m
[32m+[m[32m                        {Campaign.title}[m
[32m+[m[32m                    </CampaignTitle>[m
[32m+[m[32m                    <CampaignDesc>{Campaign.description}</CampaignDesc>[m
                 </div>[m
                 <div className="py-3 mb-3">[m
[31m-                    <Progress progress={camplaign.progress} />[m
[32m+[m[32m                    <Progress progress={Campaign.progress} />[m
                 </div>[m
                 <div className={classNames("flex-j-start gap-8 md:gap-16")}>[m
                     <RaisedAmountDetails[m
[31m-                        amount={`$${camplaign.raised}`}[m
[31m-                        description={`Raised of $${camplaign.raisedOf}`}[m
[32m+[m[32m                        amount={`$${Campaign.raised}`}[m
[32m+[m[32m                        description={`Raised of $${Campaign.raisedOf}`}[m
                     />[m
                     <RaisedAmountDetails[m
[31m-                        amount={camplaign.TotalBackers}[m
[32m+[m[32m                        amount={Campaign.TotalBackers}[m
                         description="Total backers"[m
                     />[m
                     <RaisedAmountDetails[m
[36m@@ -85,20 +77,17 @@[m [mconst CamplaignItemLarge = ({ camplaign }) => {[m
 [m
 const RaisedAmountDetails = ({ amount, description }) => {[m
     return ([m
[31m-        <div[m
[31m-            className={classNames([m
[31m-                "flexc-start gap-1 ",[m
[31m-                "text-sm md:text-base text-text4"[m
[31m-            )}[m
[31m-        >[m
[31m-            <span className="text-text2 dark:text-text4 font-bold md:text-xl text-base">[m
[31m-                {amount}[m
[31m-            </span>[m
[31m-            <span>{description}</span>[m
[31m-        </div>[m
[32m+[m[32m        <CampaignMeta[m
[32m+[m[32m            amount={amount}[m
[32m+[m[32m            desc={description}[m
[32m+[m[32m            className="font-bold md:text-xl text-base"[m
[32m+[m[32m            descClassName="text-sm md:text-base"[m
[32m+[m[32m        />[m
     );[m
 };[m
 [m
[31m-CamplaignItemLarge.propTypes = {};[m
[32m+[m[32mCampaignItemLarge.propTypes = {[m
[32m+[m[32m    Campaign: PropTypes.object.isRequired,[m
[32m+[m[32m};[m
 [m
[31m-export default CamplaignItemLarge;[m
[32m+[m[32mexport default CampaignItemLarge;[m
[1mdiff --git a/src/modules/Camplaign/CamplaignLarge.js b/src/modules/Campaign/CampaignLarge.js[m
[1msimilarity index 76%[m
[1mrename from src/modules/Camplaign/CamplaignLarge.js[m
[1mrename to src/modules/Campaign/CampaignLarge.js[m
[1mindex ebb973b..6050ac0 100644[m
[1m--- a/src/modules/Camplaign/CamplaignLarge.js[m
[1m+++ b/src/modules/Campaign/CampaignLarge.js[m
[36m@@ -2,9 +2,9 @@[m [mimport React from "react";[m
 import PropTypes from "prop-types";[m
 import classNames from "../../utils/classNames";[m
 import Heading from "../../components/Heading/Heading";[m
[31m-import CamplaignItemLarge from "./CamplaignItemLarge";[m
[32m+[m[32mimport CampaignItemLarge from "./CampaignItemLarge";[m
 [m
[31m-const camplaigns = [[m
[32m+[m[32mconst Campaigns = [[m
     {[m
         videoUrl:[m
             "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",[m
[36m@@ -33,10 +33,10 @@[m [mconst camplaigns = [[m
     },[m
 ];[m
 [m
[31m-const CamplaignLarge = ({ className, heading, count, showTotalCamplaign }) => {[m
[32m+[m[32mconst CampaignLarge = ({ className, heading, count, showTotalCampaign }) => {[m
     return ([m
         <div className={classNames(className)}>[m
[31m-            <Heading number={showTotalCamplaign && camplaigns.length}>[m
[32m+[m[32m            <Heading number={showTotalCampaign && Campaigns.length}>[m
                 {heading}[m
             </Heading>[m
             <div[m
[36m@@ -44,10 +44,10 @@[m [mconst CamplaignLarge = ({ className, heading, count, showTotalCamplaign }) => {[m
                     count > 1 && "flexc-start md:gap-10 gap-5 w-full"[m
                 )}[m
             >[m
[31m-                {camplaigns.slice(0, count).map((camplaign) => ([m
[31m-                    <CamplaignItemLarge[m
[31m-                        key={camplaign.title}[m
[31m-                        camplaign={camplaign}[m
[32m+[m[32m                {Campaigns.slice(0, count).map((Campaign) => ([m
[32m+[m[32m                    <CampaignItemLarge[m
[32m+[m[32m                        key={Campaign.title}[m
[32m+[m[32m                        Campaign={Campaign}[m
                     />[m
                 ))}[m
             </div>[m
[36m@@ -55,11 +55,11 @@[m [mconst CamplaignLarge = ({ className, heading, count, showTotalCamplaign }) => {[m
     );[m
 };[m
 [m
[31m-CamplaignLarge.propTypes = {[m
[32m+[m[32mCampaignLarge.propTypes = {[m
     className: PropTypes.string,[m
     heading: PropTypes.string,[m
     count: PropTypes.number,[m
[31m-    showTotalCamplaign: PropTypes.bool,[m
[32m+[m[32m    showTotalCampaign: PropTypes.bool,[m
 };[m
 [m
[31m-export default CamplaignLarge;[m
[32m+[m[32mexport default CampaignLarge;[m
[1mdiff --git a/src/modules/Campaign/CampaignMeta.js b/src/modules/Campaign/CampaignMeta.js[m
[1mnew file mode 100644[m
[1mindex 0000000..fbd9201[m
[1m--- /dev/null[m
[1m+++ b/src/modules/Campaign/CampaignMeta.js[m
[36m@@ -0,0 +1,33 @@[m
[32m+[m[32mimport React from "react";[m
[32m+[m[32mimport PropTypes from "prop-types";[m
[32m+[m[32mimport classNames from "../../utils/classNames";[m
[32m+[m
[32m+[m[32mconst CampaignMeta = ({ amount, desc, className, descClassName }) => {[m
[32m+[m[32m    return ([m
[32m+[m[32m        <div className={classNames("flexc-i-start gap-y-1")}>[m
[32m+[m[32m            <span[m
[32m+[m[32m                className={classNames("text-text2 dark:text-text4", className)}[m
[32m+[m[32m            >[m
[32m+[m[32m                {amount}[m
[32m+[m[32m            </span>[m
[32m+[m[32m            <span[m
[32m+[m[32m                className={classNames([m
[32m+[m[32m                    "text-text4 dark:text-text3",[m
[32m+[m[32m                    descClassName[m
[32m+[m[32m                )}[m
[32m+[m[32m            >[m
[32m+[m[32m                {desc}[m
[32m+[m[32m            </span>[m
[32m+[m[32m        </div>[m
[32m+[m[32m    );[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mCampaignMeta.propTypes = {[m
[32m+[m[32m    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])[m
[32m+[m[32m        .isRequired,[m
[32m+[m[32m    desc: PropTypes.string.isRequired,[m
[32m+[m[32m    className: PropTypes.string,[m
[32m+[m[32m    descClassName: PropTypes.string,[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default CampaignMeta;[m
[1mdiff --git a/src/modules/Campaign/CampaignTitle.js b/src/modules/Campaign/CampaignTitle.js[m
[1mnew file mode 100644[m
[1mindex 0000000..1ee3691[m
[1m--- /dev/null[m
[1m+++ b/src/modules/Campaign/CampaignTitle.js[m
[36m@@ -0,0 +1,28 @@[m
[32m+[m[32mimport React from "react";[m
[32m+[m[32mimport PropTypes from "prop-types";[m
[32m+[m[32mimport classNames from "../../utils/classNames";[m
[32m+[m[32mimport { Link } from "react-router-dom";[m
[32m+[m
[32m+[m[32mconst CampaignTitle = ({ children, className, to }) => {[m
[32m+[m[32m    return ([m
[32m+[m[32m        <Link to={to || "/"}>[m
[32m+[m[32m            <h1[m
[32m+[m[32m                className={classNames([m
[32m+[m[32m                    "text-text1 dark:text-white",[m
[32m+[m[32m                    "content-overflow-one-line ",[m
[32m+[m[32m                    className[m
[32m+[m[32m                )}[m
[32m+[m[32m            >[m
[32m+[m[32m                {children}[m
[32m+[m[32m            </h1>[m
[32m+[m[32m        </Link>[m
[32m+[m[32m    );[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mCampaignTitle.propTypes = {[m
[32m+[m[32m    children: PropTypes.node.isRequired,[m
[32m+[m[32m    classNames: PropTypes.string,[m
[32m+[m[32m    to: PropTypes.string,[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default CampaignTitle;[m
[1mdiff --git a/src/modules/Campaign/index.js b/src/modules/Campaign/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..3c88fa7[m
[1m--- /dev/null[m
[1m+++ b/src/modules/Campaign/index.js[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mexport { default as Campaign } from "./Campaign";[m
[1mdiff --git a/src/modules/Camplaign/index.js b/src/modules/Camplaign/index.js[m
[1mdeleted file mode 100644[m
[1mindex ea0a86f..0000000[m
[1m--- a/src/modules/Camplaign/index.js[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-export { default as Camplaign } from "./Camplaign";[m
[1mdiff --git a/src/pages/CampaignPage.js b/src/pages/CampaignPage.js[m
[1mindex 77176d7..9196560 100644[m
[1m--- a/src/pages/CampaignPage.js[m
[1m+++ b/src/pages/CampaignPage.js[m
[36m@@ -1,20 +1,18 @@[m
 import React from "react";[m
 import { Button } from "../components/Button";[m
[31m-import Heading from "../components/Heading/Heading";[m
[31m-import { IconPlay, IconPlus } from "../components/Icon";[m
[32m+[m[32mimport { IconPlus } from "../components/Icon";[m
 import MainLayout from "../layouts/MainLayout";[m
[31m-import Camplaign from "../modules/Camplaign/Camplaign";[m
[31m-import CamplaignLarge from "../modules/Camplaign/CamplaignLarge";[m
[32m+[m[32mimport CampaignLarge from "../modules/Campaign/CampaignLarge";[m
 import classNames from "../utils/classNames";[m
 [m
 const CampaignPage = () => {[m
     return ([m
         <MainLayout contentClassName={classNames("flexc gap-10")}>[m
             <CreateCampaign />[m
[31m-            <CamplaignLarge[m
[32m+[m[32m            <CampaignLarge[m
                 heading="Your Campaign"[m
                 count={4}[m
[31m-                showTotalCamplaign[m
[32m+[m[32m                showTotalCampaign[m
             />[m
             <Button[m
                 kind="secondary3"[m
[1mdiff --git a/src/pages/DashboardPage.js b/src/pages/DashboardPage.js[m
[1mindex f5f4759..6bb0865 100644[m
[1m--- a/src/pages/DashboardPage.js[m
[1m+++ b/src/pages/DashboardPage.js[m
[36m@@ -1,18 +1,18 @@[m
 import React from "react";[m
 import MainLayout from "../layouts/MainLayout";[m
[31m-import Camplaign from "../modules/Camplaign/Camplaign";[m
[31m-import CamplaignLarge from "../modules/Camplaign/CamplaignLarge";[m
[32m+[m[32mimport Campaign from "../modules/Campaign/Campaign";[m
[32m+[m[32mimport CampaignLarge from "../modules/Campaign/CampaignLarge";[m
 [m
 const DashboardPage = () => {[m
     return ([m
         <MainLayout contentClassName="flexc gap-8">[m
[31m-            <CamplaignLarge[m
[32m+[m[32m            <CampaignLarge[m
                 heading="Your Campaign"[m
                 count={1}[m
[31m-                showTotalCamplaign[m
[32m+[m[32m                showTotalCampaign[m
             />[m
[31m-            <Camplaign heading="Popular Campaign" />[m
[31m-            <Camplaign heading="Recent Campaign" />[m
[32m+[m[32m            <Campaign heading="Popular Campaign" />[m
[32m+[m[32m            <Campaign heading="Recent Campaign" />[m
         </MainLayout>[m
     );[m
 };[m
