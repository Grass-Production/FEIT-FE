import { CardCreateOne } from './component';
import { NavLink } from 'react-router-dom';
import { InputSection } from '../../../components';
import { useState } from 'react';
import { IconArrowUpLeft } from '../../../svgs';
import { Button } from '../../../components';
import { useParams } from 'react-router-dom';

export default function FormAddFile() {
    return (
        <div className="">
            <CardCreateOne />
        </div>
    );
}
