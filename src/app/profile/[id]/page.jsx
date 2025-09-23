"use client";
import { useParams } from "next/navigation";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { providers } from "../../services/data";
import Link from "next/link";
import Image from "next/image";
import proImg from "../../assets/avatar-1.jpg";
import img from "../../assets/6.jpg";

export default function ProfilePage() {
  const { id } = useParams();
  const provider = providers.find((p) => p.id === Number(id));

  if (!provider) {
    return (
      <Container className="text-center mt-5">
        <h2> لا يوجد مقدم خدمة بهذا الرقم</h2>
        <Link href="/services" className="btn btn-secondary mt-3">
          رجوع للخدمات
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      //بطاقة المعلومات الأساسية
      <Card
        className="p-4 shadow-lg text-center mb-4"
        style={{ backgroundColor: "#1e2939", color: "#fff" }}
      >
        <Image
          src={proImg}
          alt={`${providers.name}`}
          className="rounded-circle shadow mx-auto"
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
        <h3 className="mt-3">{provider.name}</h3>
        <p className="text-muted mb-1">{provider.service}</p>
        <p className="fw-bold text-warning">
          {"⭐".repeat(Math.floor(provider.rating))} {provider.rating} / 5
        </p>
        <a
          href={provider.portfolio}
          target="_blank"
          className="btn btn-outline-primary mt-2"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </Card>
      // نبذة
      <Card
        className="p-3 shadow-sm mb-3"
        style={{ backgroundColor: "#1e2939", color: "#fff" }}
      >
        <h5>نبذة</h5>
        <p>{provider.bio}</p>
      </Card>
      // المهارات
      <Card
        className="p-3 shadow-sm mb-3"
        style={{ backgroundColor: "#1e2939", color: "#fff" }}
      >
        <h5>المهارات</h5>
        <div className="d-flex flex-wrap gap-2">
          {provider.skills.map((skill, i) => (
            <Badge bg="primary" key={i} className="fs-6 px-3 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
      // الشهادات
      {provider.certificates.length > 0 && (
        <Card
          className="p-3 shadow-sm mb-3"
          style={{ backgroundColor: "#1e2939", color: "#fff" }}
        >
          <h5>الشهادات</h5>
          <ul className="mb-0">
            {provider.certificates.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </Card>
      )}
      // المشاريع السابقة
      <Card
        className="p-3 shadow-sm mb-3"
        style={{ backgroundColor: "#1e2939", color: "#fff" }}
      >
        <h5>المشاريع السابقة</h5>
        <Row>
          {provider.projects.map((proj, i) => (
            <Col md={6} key={i} className="mb-3">
              <Card
                className="h-100 w-100 shadow-sm"
                style={{ backgroundColor: "#1e2939", color: "#fff" }}
              >
                <Image
                  src={img}
                  alt={"profile image"}
                  style={{ objectFit: "cover", height: "80%", width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
      // آراء العملاء
      <Card
        className="p-3 shadow-sm"
        style={{ display: "flex", backgroundColor: "#1e2939", color: "#fff" }}
      >
        <h5>آراء العملاء</h5>
        <Row>
          {provider.feedback.length > 0 ? (
            provider.feedback.map((fb, i) => (
              <div
                key={i}
                className="bg-gray-800 p-4 rounded shadow"
                style={{ width: "20rem", margin: "20px", position: "relative" }}
              >
                <Image
                  src={proImg}
                  alt={"profile image"}
                  height={70}
                  width={70}
                  className="rounded-circle start shadow mx-auto"
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                  }}
                />
                <h6 className="fw-bold">{fb.user}</h6>
                <span className="text-gra small">{fb.comment}</span>
                <div className="mt-2">{"⭐".repeat(5)}</div>
              </div>
            ))
          ) : (
            <p className="text-muted">لا توجد تعليقات بعد</p>
          )}
        </Row>
      </Card>
    </Container>
  );
}
