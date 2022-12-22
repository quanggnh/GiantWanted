using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;


public class BulletCameraController : MonoBehaviour
{
    [SerializeField] Camera bulletCam;

    private Vector3 _camMoveTarget = new Vector3(-17f, 0, 10f);
    private Vector3 _camRotationTarget = new Vector3(-1f, 111f, 1f);
    private float moveTime;

    private void OnEnable()
    {
        CalculateTime();

        bulletCam.transform.DOLocalMove(_camMoveTarget, moveTime);
        bulletCam.transform.DOLocalRotate(_camRotationTarget, moveTime);
    }

    private void CalculateTime()
    {
        var moveDistance = _camMoveTarget - bulletCam.transform.localPosition;
        var rotationDistance = _camRotationTarget - bulletCam.transform.localEulerAngles;

        moveTime = moveDistance.magnitude / 200f;
    }
}
