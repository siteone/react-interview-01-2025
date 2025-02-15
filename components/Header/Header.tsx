import React from 'react'
import Link from 'next/link'
import Container from '@/components/Container'
import styles from './Header.module.scss'
import { Course } from '@/modules/shared/types'

interface HeaderProps {
  courses: Course[]
}

const Header: React.FC<HeaderProps> = ({ courses = [] }) => (
  <header className={styles.base}>
    <Container>
      <div className={styles.logo}>Course Platform</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {courses?.map(course => (
            <li key={course.id}>
              <Link href={`/course/${course.id}`}>
                {course.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  </header>
)

export default Header
