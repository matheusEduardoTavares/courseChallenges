FROM golang:alpine3.18 AS builder
WORKDIR /var/www
COPY go/fullcycle.go .
RUN go mod init fullcycle && go build

FROM scratch
WORKDIR /var/www
COPY --from=builder /var/www/fullcycle .
ENTRYPOINT ["./fullcycle"]
