"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { providers } from "./data";
import img from "../assets/landing.jpg";

export default function Services() {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [category, setCategory] = useState("all");

  // فلترة
  const filteredProviders = providers.filter(
    (p) =>
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.service.toLowerCase().includes(search.toLowerCase())) &&
      p.rating >= minRating &&
      (category === "all" || p.category === category)
  );

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">مقدمي الخدمات</h2>

      {/*  البحث والفلاتر */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            style={{
              backgroundColor: "#1e2939",
              color: "#fff",
              border: "1px solid #aaa",
            }}
            type="text"
            placeholder="ابحث بالاسم أو نوع الخدمة..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            style={{
              backgroundColor: "#1e2939",
              color: "#fff",
              border: "1px solid #aaa",
            }}
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
          >
            <option value={0}>كل التقييمات</option>
            <option value={4}>+4 نجوم</option>
            <option value={4.5}>+4.5 نجوم</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select
            style={{
              backgroundColor: "#1e2939",
              color: "#fff",
              border: "1px solid #aaa",
            }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">كل التصنيفات</option>
            <option value="web">Web Development</option>
            <option value="design">UI/UX Design</option>
            <option value="security">Cyber Security</option>
          </Form.Select>
        </Col>
      </Row>

      {/* عرض البطاقات */}
      <Row>
        {filteredProviders.length > 0 ? (
          filteredProviders.map((provider) => (
            <Col md={6} lg={4} key={provider.id} className="mb-4">
              <Card
                className="h-100 shadow-sm text-center p-3"
                style={{
                  backgroundColor: "#1e2939",
                  color: "#fff",
                  border: "1px solid #aaa",
                }}
              >
                <Image
                  variant="top"
                  alt={`${providers.category}`}
                  src={img}
                  className="rounded-circle mx-auto"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title>{provider.name}</Card.Title>
                  <Card.Text>
                    {provider.service}{" "}
                    <Badge bg="info" className="ms-2">
                      {provider.category}
                    </Badge>
                  </Card.Text>
                  <p>
                    {"⭐".repeat(Math.floor(provider.rating))} {provider.rating}{" "}
                    / 5
                  </p>
                  <Link href={`/profile/${provider.id}`} passHref>
                    <Button variant="primary">عرض الملف الشخصي</Button>
                  </Link>
                  <Link href={`/requestService/${provider.id}`} passHref>
                    <Button className="ms-3" variant="primary">
                      طلب الخدمة
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">لا يوجد نتائج مطابقة</p>
        )}
      </Row>
    </Container>
  );
}
