import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise1 from '../src/Exercise1';
import fs from 'fs'
import path from 'path'

describe("Exercise1", () => {
    it('Exercise1 check using css or not', () => {
        render(<Exercise1 />);

        screen.debug()
        const div = document.querySelectorAll("div")
        expect(div[1]).toHaveClass('article')
        expect(screen.getByText('TechUp Thailand')).toHaveClass('article-title');
        expect(screen.getByText('เตรียมพบกับหลักสูตรปั้นคุณเป็น Software Developer ภายใน 4 เดือน')).toHaveClass('article-body');
        expect(screen.getByText('techupth.com')).toHaveClass('article-link');
        expect(div[2]).toHaveClass('bootcamp-start-time')
        // const currentDate = getCurrentDateTime()
        // expect(screen.getByText(`${currentDate}`)).toBeInTheDocument
    });

    it("Exercise1 check using getCurrentDateTime()", async () => {
        render(<Exercise1 />);
        const exercisePath = path.join(
            process.cwd(),
            "src/Exercise1/index.jsx"
        );

        const data = await fs.readFileSync(exercisePath, "utf8");
        const regex = /getCurrentDateTime()/g;
        const found = data.match(regex);
        console.log(data);
        console.log(found);
        expect(found.length).toBe(2)
    })
})