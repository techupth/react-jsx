import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise1 from './Exercise1';
import { getCurrentDateTime } from './utils';

test('PToey', () => {
    render(<Exercise1 />);
    // screen.debug()
    const div = document.querySelectorAll("div")
    const currentDate = getCurrentDateTime()
    expect(div[1]).toHaveClass('article')
    expect(screen.getByText('TechUp Thailand')).toHaveClass('article-title');
    expect(screen.getByText('เตรียมพบกับหลักสูตรปั้นคุณเป็น Software Developer ภายใน 4 เดือน')).toHaveClass('article-body');
    expect(screen.getByText('techupth.com')).toHaveClass('article-link');
    expect(div[2]).toHaveClass('bootcamp-start-time')
    expect(screen.getByText(`วันเวลาเริ่มหลักสูตร คือ ${currentDate}`)).toBeInTheDocument
});